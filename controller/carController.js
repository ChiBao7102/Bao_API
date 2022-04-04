const handleOther = require('./handelOther');
const carService = require('../service/carService');
class CarController {
    addCar = async (req, res, next) =>{
        const {id_renter} = req.params;
        const formData = req.body;
        await carService.addCar(id_renter,formData)
            .then(data => {
                if(data)
                    return res.json(data);
                return res.status(400).json(handleOther.errorHandling("Lỗi trùng username hoặc user_id", null))
            })
            .catch(err => next(err));  
    }
    getAllCar= async (req, res, next) => {
        await carService.getCarList()   
            .then(car_renter =>{
                if(cars)
                    return car_renter.json(cars);
                return car_renter.status(400).json(handleOther.errorHandling("Lỗi", null)); 
            })
            .catch(error => next(error))
    }
}
module.exports = new CarController();