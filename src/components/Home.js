import React from "react";
import styles from '../StyleModules/home.module.css'

export default function Home() {
    return (
        <main className={styles.background}>
            <section 
                className="relative flex justify-center pt-12 lg:pt-12 px-8"
            >
                <h1 
                    className={styles.title}
                >
                    Nick Luckey
                </h1>
            </section>
        </main>

    )

}