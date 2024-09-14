import { useState } from "react";
import Mood from "./../assets/images/Path.svg"
import EmptyImg from ".././assets/images/Group 250.png"
import Modal from "./Modal";
import Button from "./Button";
function Header(){
    const [isOpenModal, setIsOpenModal] = useState(false)
    const [choosedImg, setChoosefImg] = useState(EmptyImg)
    const [name, setName] = useState("")
    const [capital, setCapital] = useState("")
    const [population, setPopulation] = useState("")

    function DarkMode() {
        const htmlElement = document.documentElement;
        htmlElement.classList.toggle("dark");
        console.log(htmlElement.classList); 
      }
      function handleCancelBtnClick(){
        setIsOpenModal(false)
        setChoosefImg(EmptyImg)
      }
      function hadleSubmitCountry(e){
        e.preventDefault()
        const data ={
            id: 1,
            name: "Wallis and Futuna",
            capital: "Mata-Utu",
            population: 11750,
            flag: "https://flagcdn.com/wf.svg",
            region: "Oceania",
            isLiked: false,
            isBasket: false     
        }
      }
    return (
        <>
        <header className="bg-white dark:bg-white body-dark shadow-lg px-[80px] p-4 flex items-center justify-between">
        <a className="text-[40px] font-bold text-white dark:text-[#2B3844] >Countries" href="/" >Countries</a>
        <div className="flex items-center space-x-5">
            <button onClick={() => {DarkMode()}} className=" flex items-center gap-[10px]">
                <img src={Mood} width={15} height={13}/>
                <h2 className="text-white dark:text-[#2B3844]">
                Dark Mode
                </h2>
           </button>
            <button onClick={() => setIsOpenModal(true)} className=" flex border-[1px] p-[5px] rounded-md border-black items-center gap-[10px] dark:hover:bg-white dark:bg-white">
                <h2 className="text-white dark:text-[#2B3844]">Add  Country</h2>
            </button>
        </div>
        </header>
        <Modal isOpenModal={isOpenModal} setIsOpenModal={setIsOpenModal}>
            <form onSubmit={hadleSubmitCountry} autoComplete="off">
                <div className="flex justify-between items-center">
                <label className="w-[49%]">
                <input onChange={(e) => setChoosefImg(URL.createObjectURL(e.target.files[0]))} className="hidden" type="file"/>
                <img className="h-[180px] object-contain" src={choosedImg} alt="Chose img" width={"100%"}/>
                </label>
                <div className="w-[49%] space-y-4">
                    <input onChange={(e) => setName(e.target.value)} className="w-full p-2 rounded-md outline-none border-[1px] border-slate-500" required placeholder="Enter country name" name="Naem"/>
                    <input onChange={(e) => setCapital(e.target.value)} className="w-full p-2 rounded-md outline-none border-[1px] border-slate-500" required placeholder="Enter country capital" name="capital"/>
                    <input onChange={(e) => setPopulation(e.target.value)} className="w-full p-2 rounded-md outline-none border-[1px] border-slate-500" required placeholder="Enter country population" name="population"/>
                </div>
                </div>
                <div className="flex items-center justify-between">
                <Button onClick={handleCancelBtnClick} title={"Cancel"} type={"Button"} extraStyle={" w-[49%] mt-5 bg-red-600  text-white" }/>
                <Button title={"Submit"} type={"Submit"} extraStyle={" w-[49%] mt-5 bg-green-600 text-white" }/>
                </div>
            </form>
        </Modal>
        </>
    )
}
export default Header;