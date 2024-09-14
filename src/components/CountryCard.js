function CountryCard({item}){
    return(
        <li className="w-[350px] shadow-lg p-2 rounded-md  bg-[#2B3844] dark:bg-white body-dark ">
        <img src={item.flag} alt="Flag" width={"100%"}/>
        <div>
          <strong className="text-white dark:text-[#2B3844] text-[35px] font-bold">{item.name}</strong>
          <p className="text-white dark:text-[#2B3844]"> Population:{item.population}</p>
          <p className="text-white dark:text-[#2B3844]">Region:{item.name}</p>
          <p className="text-white dark:text-[#2B3844]">Capital:{item.capital}</p>
        </div>
      </li>
    )
}

export default CountryCard;