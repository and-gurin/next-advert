'use client'

import {baskerville} from "@/app/fonts";
import style from "./Promotion.module.scss"
import React from "react";

const Promotion = () => {

    return (
        <>
            <section id={'clients'} className={style.promotion}>
                <div className={`wrapper ${style.promotion__wrapper}`}>
                    <div className={style.promotion__grid}>
                        <div className={style.promotion__material}>
                            <div>
                                <h3 className={baskerville.className + ' ' + style.promotion__title}>
                                    {'актуальное / акции'}
                                </h3>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>

    );
};

export default Promotion;