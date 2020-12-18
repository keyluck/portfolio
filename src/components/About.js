import React from "react"
import styles from "../StyleModules/home.module.css"
import img from "../img/nick.png"



export default function About() {
    
    return (
            <main className={styles.background}>
              <section className="relative flex justify-center pt-12 lg:pt-12 px-8">
                <h1 className={styles.title}>
                      About Me!
                      
                </h1>
              </section>
              <div className="p-4 pt-10 container mx-auto max-w-3xl ">
                <section className="bg-white  shadow-2xl  p-4 h-48">
                  <img
                    src={img}
                    className=" w-40 h-40 inline-block "
                    alt="Nick"
                  />
                  <div className="inline-block">
                    
                    <p className="text-black-800">Bio here</p>
                  </div>
                </section>
              </div>
            </main>
    )


}