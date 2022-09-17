import React from "react"

const LockerPage = () => {
    return (
        <div className="flex flex-col h-screen text-white bg-gradient-linear from-blue-900 to-black">
            <h1 className="text-4xl font-bold">Locker</h1>
            <p>Select the items you want to wear</p>
            <div className="flex">
                <div className="m-2">
                    <h2>Shorts:</h2>
                    <ul className="mt-2 p-9 border-solid border-2 border-white">
                        <li>Item 1</li>
                        <li>Item 2</li>
                        <li>Item 3</li>
                    </ul>
                </div>
                <div className="m-2">
                    <h2>Gloves:</h2>
                    <ul className="mt-2 p-9 border-solid border-2 border-white">
                        <li>Item 1</li>
                        <li>Item 2</li>
                    </ul>
                </div>
                <div className="m-2">
                    <h2>Shoes:</h2>
                    <ul className="mt-2 p-9 border-solid border-2 border-white">
                        <li>Item 1</li>
                        <li>Item 2</li>
                        <li>Item 3</li>
                        <li>Item 4</li>
                    </ul>
                </div>
                <div className="m-2">
                    <h2>Rings:</h2>
                    <ul className="mt-2 p-9 border-solid border-2 border-white">
                        <li>No items</li>
                    </ul>
                </div>
                <div className="m-2">
                    <h2>Bag:</h2>
                    <ul className="mt-2 p-9 border-solid border-2 border-white">
                        <li>Item 1</li>
                    </ul>
                </div>
            </div>

            <a href="./">&larr; Back</a>
        </div>
    )
}

export default LockerPage