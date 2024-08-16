import Restaurant from '../models/Restaurant.js'; // Import the Restaurant model

export const nearby = async (req, res) => {
     // Extracts query parameters: latitude, longitude, and radius
    const { latitude, longitude, radius } = req.query;
    
    // Validating  required parameters 
    if (!latitude || !longitude || !radius) return res.status(400).json({ error: 'Missing required query parameters: latitude, longitude, and radius' });
    
    // Parsing the parameters
    const parsedLatitude = parseFloat(latitude);
    const parsedLongitude = parseFloat(longitude);
    const parsedRadius = parseInt(radius, 10);

     // Check for invalid parameters
    if (isNaN(parsedLatitude) || isNaN(parsedLongitude) || isNaN(parsedRadius)) return res.status(400).json({ error: 'Invalid query parameters' });

    try {
        // Query the database for restaurants near the specified coordinates
        const restaurants = await Restaurant.find({
            "address.coord": {
                $near: {
                    $geometry: { type: "Point", coordinates: [parsedLongitude, parsedLatitude] },
                    $maxDistance: parsedRadius
                }
            }
        }).select({ name: 1, description: 1, "address.coord": 1, grades: 1 }).exec();

        // Process the results to include average rating and number of ratings
        const results = restaurants.map(restaurant => {
            const totalScore = restaurant.grades.reduce((sum, grade) => sum + grade.score, 0);
            const averageRating = totalScore / restaurant.grades.length;
            return {
                name: restaurant.name,
                description: restaurant.description,
                location: { latitude: restaurant.address.coord[1], longitude: restaurant.address.coord[0] },
                averageRating: averageRating.toFixed(1),
                numberOfRatings: restaurant.grades.length
            };
        });

        // Send the processed results as a JSON response
        res.json({ results });
    } catch (error) {
        console.error('Error fetching restaurants:', error);
        res.status(500).json({ error: 'error occurred while fetching the restaurants' });
    }
};

export const nearbyRange = async (req, res) => {
    // Extract query parameters: latitude, longitude, minimumDistance, and maximumDistance
    const { latitude, longitude, minimumDistance, maximumDistance } = req.query;

    if (!latitude || !longitude || !minimumDistance || !maximumDistance) return res.status(400).json({ error: 'Missing required query parameters: latitude, longitude, minimumDistance, and maximumDistance' });
    
    // Parse and validate the parameters
    const parsedLatitude = parseFloat(latitude);
    const parsedLongitude = parseFloat(longitude);
    const parsedMinDistance = parseInt(minimumDistance, 10);
    const parsedMaxDistance = parseInt(maximumDistance, 10);

    if (isNaN(parsedLatitude) || isNaN(parsedLongitude) || isNaN(parsedMinDistance) || isNaN(parsedMaxDistance)) return res.status(400).json({ error: 'Invalid query parameters' });

    try {
        // Query the database for restaurants within the specified distance range
        const results = await Restaurant.aggregate([
            {
                $geoNear: {
                    near: { type: "Point", coordinates: [parsedLongitude, parsedLatitude] },
                    distanceField: "distance",
                    maxDistance: parsedMaxDistance,
                    minDistance: parsedMinDistance,
                    spherical: true
                }
            },
            {
                $project: {
                    name: 1,
                    description: 1,
                    location: {
                        latitude: "$address.coord.1",
                        longitude: "$address.coord.0"
                    },
                    averageRating: {
                        $avg: "$grades.score"
                    },
                    numberOfRatings: { $size: "$grades" }
                }
            }
        ]);

        const formattedResults = results.map(restaurant => ({
            name: restaurant.name,
            description: restaurant.description,
            location: { latitude: restaurant.location.latitude, longitude: restaurant.location.longitude },
            averageRating: restaurant.averageRating,
            numberOfRatings: restaurant.numberOfRatings
        }));

        res.json({ formattedResults });
    } catch (error) {
        console.error('Error fetching restaurants:', error);
        res.status(500).json({ error: 'An error occurred while fetching the restaurants' });
    }
};
