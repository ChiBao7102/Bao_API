const Car = require('../models/car_renter');
const {mongooseToObject, multiplemongooseToObject} = require('../util/mongoose');

class CarService {

    // addCar = async(id_renter, object) =>{
    //     object.id_renter = id_renter;
    //     // console.log("car_id: ", object)
    //     const car = new Car(object);
    //     const carSave =  await car.save()
    //         .then(data => mongooseToObject(data))
    //         .catch(err => err);
    //     // console.log(carSave)
    //     return carSave;
    // }
    
    // getCarByUserID = async(id_renter) =>{
    //     return await Car.findOne({id_renter:id_renter})
    //         .then(data => mongooseToObject(data))
    //         .catch(err=> err);
    // }
    
    // getCarbyID = async(id_param) =>{
    //     return await Car.findById({_id: id_param})
    //         .then(data => mongooseToObject(data))
    //         .catch(err => err);
    // }

    // updateCarById = async(id, object) =>{
       
    //     //trả về dữ liệu củ
    //     await Car.findByIdAndUpdate({_id: id}, object)
    //         .then(data => mongooseToObject(data))
    //         .catch(err => err);
    //     //trả về dữ liệu mới
    //     return await this.getCarbyID(id)
    //         .then(data => data)
    //         .catch(err => err);
    // }

    // updateCarByUserID = async(id_renter, object) =>{
    //     //trả về dữ liệu cuũ
    //     await Car.findOneAndUpdate({id_renter: id_renter}, object)
    //         .then(data => mongooseToObject(data))
    //         .catch(err => err);
    //     //trả về dữ liệu mới
    //     return await this.getCarByUserID(id_renter)
    //         .then(data => data)
    //         .catch(err => err);
    // }
    getCarList = async () =>{
        return await Car.find({}) // return về promise
            .then(cars =>{
                return multiplemongooseToObject(cars);  //return về data promise
            })
            .catch(err => err);
    }
}

module.exports = new CarService();