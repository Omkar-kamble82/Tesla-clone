import { useState } from "react";
import { ModelSPlaid1_Specs, ModelSPlaid2_Specs,ModelS1_Specs, ModelS2_Specs} from "../constants/data";

const Specs = () => {

    const [specs,setSpecs] = useState(0);

    return (
        <div className="flex flex-col lg:flex-row">
            <div><img className="md:w-[800px] " src="/models/model-s-specs.jpg" alt="car-specs"/></div>
            <div className="my-16 ">
                <h1 className="text-white text-center text-2xl font-bold">Model S Specs</h1>
                <div className="flex my-4 mx-2 items-center justify-center">
                    <button onClick={() => {setSpecs(0)}} className={`overflow-hidden text-white w-[180px] text-[14px] py-2 mr-4 border-2 ${specs === 0 ? "border-white" : "border-[#3b3b3b]"} font-medium rounded-[5px]`}>Model S Plaid</button>
                    <button onClick={() => {setSpecs(1)}} className={`overflow-hidden text-white w-[180px] text-[14px] py-2 mr-4 border-2 ${specs === 1 ? "border-white" : "border-[#3b3b3b]"} font-medium rounded-[5px]`}>Model S</button>
                </div>
                {specs === 0 && <div className="flex items-center justify-center">
                    <div className="text-white flex flex-col w-[140px] justify-evenly mx-4 lg:w-[170px]">
                        {ModelSPlaid1_Specs.map((ModelSPlaid1_Spec) => {
                            return (
                                <div key={ModelSPlaid1_Spec.id} className="my-3">
                                    <h1 className="font-bold text-xl">{ModelSPlaid1_Spec.heading}</h1>
                                    <p className="text-sm">{ModelSPlaid1_Spec.description}</p>
                                </div>
                            )
                        })}
                    </div>
                    <div className="text-white flex flex-col w-[140px] justify-evenly mx-4 lg:w-[170px]">
                        {ModelSPlaid2_Specs.map((ModelSPlaid2_Spec) => {
                            return (
                                <div key={ModelSPlaid2_Spec.id} className="my-3">
                                    <h1 className="font-bold text-xl">{ModelSPlaid2_Spec.heading}</h1>
                                    <p className="text-sm">{ModelSPlaid2_Spec.description}</p>
                                </div>
                            )
                        })}
                    </div>
                </div>}
                {specs === 1 && <div className="flex items-center justify-center">
                    <div className="text-white flex flex-col w-[140px] justify-evenly mx-4 lg:w-[170px]">
                        {ModelS1_Specs.map((ModelS1_Spec) => {
                            return (
                                <div key={ModelS1_Spec.id} className="my-3">
                                    <h1 className="font-bold text-xl">{ModelS1_Spec.heading}</h1>
                                    <p className="text-sm">{ModelS1_Spec.description}</p>
                                </div>
                            )
                        })}
                    </div>
                    <div className="text-white flex flex-col w-[140px] justify-evenly mx-4 lg:w-[170px]">
                        {ModelS2_Specs.map((ModelS2_Spec) => {
                            return (
                                <div key={ModelS2_Spec.id} className="my-3">
                                    <h1 className="font-bold text-xl">{ModelS2_Spec.heading}</h1>
                                    <p className="text-sm">{ModelS2_Spec.description}</p>
                                </div>
                            )
                        })}
                    </div>
                </div>}
            </div>
        </div>
    )
}

export default Specs