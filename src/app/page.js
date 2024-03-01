"use client"
import Image from "next/image";
import {useState} from "react";
import bikeImage from "../assets/bike.png"

export default function Home() {
  const [selectedTypeBike, setSelectedTypeBike] = useState(1)

  const [isBycicleSelected, setIsBycicleSelected] = useState(true)

  function handleSelectedTypeBike(typeNumber) {
    setSelectedTypeBike(typeNumber)
  }

  function handleSelectedBike(botaoDeCima) {
    setIsBycicleSelected(botaoDeCima === selectedTypeBike ? selectedTypeBike : !selectedTypeBike)
  }

  return (
    <main className="flex min-h-screen flex-wrap-reverse">
      <section className="flex-[2] text-white bg-blue-900 min-h-full p-10 flex flex-col gap-28">
        <h1 className="text-[250px] absolute top-56 left-40 font-black opacity-5">
          I F
        </h1>
        <div>
          Bikevile
        </div>
        <div className="flex gap-2">
          <div className="flex-1 text-2xl ">If Mode</div>
          <div className="flex flex-1 justify-end gap-2">
            <div>
              Overview
            </div>
            <div>
              Specs
            </div>
          </div>
        </div>
        <div className="flex gap-5 flex-col">
          <div onClick={() => handleSelectedBike(true)} className={`${isBycicleSelected ? "" : "opacity-30"} cursor-pointer border-2 w-20 h-20 border-l-4 flex justify-center items-center`} style={{
            backgroundColor: "rgba(255, 255, 255, 0.1)",
            borderColor: "rgba(255, 255, 255, 0.1)",
            borderLeftColor: "red"
          }}>
            <i className="fas fa-bicycle text-2xl"></i>
          </div>
          <div onClick={() => handleSelectedBike(false)} className={`${isBycicleSelected ? "opacity-30" : ""} cursor-pointer border-2 w-20 h-20 border-l-4 flex justify-center items-center`} style={{
            backgroundColor: "rgba(255, 255, 255, 0.1)",
            borderColor: "rgba(255, 255, 255, 0.1)",
            borderLeftColor: "red"
          }}>
            <i className="fas fa-dharmachakra text-2xl"></i>
          </div>
        </div>
        <div className="flex flex-grow items-end">
          <div className="flex-1 px-10">
            <div className="text-sm text-gray-400">
              Price
            </div>
            <div className="text-xl">
              R$ 2850
            </div>
          </div>
          <button className="flex-1 bg-red-500 rounded-xl h-16">
            + Add to cart
          </button>
        </div>
      </section>
      <section className="hidden md:flex flex-1 bg-white items-center">
        <Image src={bikeImage} alt={"bike"} className="absolute left-80 rotate-12"/>
      </section>
      <section className="flex-[2] flex flex-col bg-white min-h-full p-10 gap-10">
        <nav className="self-end text-blue-700">
          <ul className="flex gap-10">
            <li>
              <a href="/about">Bikes</a>
            </li>
            <li>
              <a href="/contact">Delivery</a>
            </li>
            <li>
              <a href="/contact">Contact</a>
            </li>
            <li>
              <i className="fas fa-shopping-bag text-xl"></i>
            </li>
            <li>
              <i className="fas fa-bars text-xl"></i>
            </li>
          </ul>
        </nav>
        <button
          className="border-gray-200 w-36 border-2 rounded-md py-4 px-8 h-16 text-black flex justify-center items-center">
          ← Back
        </button>
        <h1 className="text-4xl font-bold">
          Configure the bike
        </h1>
        <div className="flex gap-4">
          <div onClick={() => handleSelectedTypeBike(1)} className={`${selectedTypeBike === 1 ? "bg-blue-500 text-white shadow-2xl" : ""} flex-1 cursor-pointer rounded-xl border-gray-300 border h-24 justify-center items-center flex`}>
            <i className="fab fa-stumbleupon-circle text-2xl"></i>
          </div>
          <div onClick={() => handleSelectedTypeBike(2)} className={`${selectedTypeBike === 2 ? "bg-blue-500 text-white shadow-2xl" : ""} flex-1 cursor-pointer rounded-xl border-gray-300 border h-24 justify-center items-center flex`}>
            <i className="fab fa-searchengin text-2xl"></i>
          </div>
          <div onClick={() => handleSelectedTypeBike(3)} className={`${selectedTypeBike === 3 ? "bg-blue-500 text-white shadow-2xl" : ""} flex-1 cursor-pointer rounded-xl border-gray-300 border h-24 justify-center items-center flex`}>
            <i className="fas fa-bicycle text-2xl"></i>
          </div>
          <div onClick={() => handleSelectedTypeBike(4)} className={`${selectedTypeBike === 4 ? "bg-blue-500 text-white shadow-2xl" : ""} flex-1 cursor-pointer rounded-xl border-gray-300 border h-24 justify-center items-center flex`}>
            <i className="fas fa-tachometer-alt text-2xl"></i>
          </div>
        </div>
        <h1 className="text-2xl">
          Wheels
        </h1>
        <div className="flex gap-4">
          <div className="flex-1 rounded-xl border-gray-300 border h-40 justify-center items-center flex">
            <i className="fas fa-bicycle text-2xl"></i>
          </div>
          <div className="flex-1 rounded-xl border-gray-300 border h-40 justify-center items-center flex">
            <i className="fas fa-bicycle text-2xl"></i>
          </div>
          <div className="flex-1 rounded-xl border-gray-300 border h-40 justify-center items-center flex">
            <i className="fas fa-bicycle text-2xl"></i>
          </div>
          <div className="flex-1 rounded-xl border-gray-300 border h-40 justify-center items-center flex">
            <i className="fas fa-bicycle text-2xl"></i>
          </div>
        </div>
      </section>
    </main>
  );
}
