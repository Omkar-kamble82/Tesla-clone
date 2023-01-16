import { useState } from "react";
import { Roof1_Specs, Roof2_Specs} from "../constants/data";

const Roofspecs = () => {

    return (
        <div className="flex flex-col lg:flex-row">
            <div><img className="md:w-[800px] " src="/solarroof/roof.png" alt="car-specs"/></div>
            <div className="my-16 ">
                <h1 className="text-white text-center text-2xl font-bold">Solar Roof Specs</h1>
                <div className="flex items-center justify-center mt-6">
                    <div className="text-white flex flex-col w-[140px] justify-evenly mx-4 lg:w-[170px]">
                        {Roof1_Specs.map((Roof1_Spec) => {
                            return (
                                <div key={Roof1_Spec.id} className="my-3">
                                    <h1 className="font-bold text-xl">{Roof1_Spec.heading}</h1>
                                    <p className="text-sm">{Roof1_Spec.description}</p>
                                </div>
                            )
                        })}
                    </div>
                    <div className="text-white flex flex-col w-[140px] justify-evenly mx-4 lg:w-[170px]">
                        {Roof2_Specs.map((Roof2_Spec) => {
                            return (
                                <div key={Roof2_Spec.id} className="my-3">
                                    <h1 className="font-bold text-xl">{Roof2_Spec.heading}</h1>
                                    <p className="text-sm">{Roof2_Spec.description}</p>
                                </div>
                            )
                        })}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Roofspecs