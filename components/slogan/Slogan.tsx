'use client'

import {baskerville} from "@/app/fonts";
import style from "./Slogan.module.scss"
import React from "react";

const Slogan = () => {

    return (
        <>
            <section className={style.slogan}>
                <div className={`wrapper ${style.slogan__wrapper}`}>
                    <div className={style.slogan__grid}>
                        <div className={style.slogan__material}>
                            <div>

                                <h3 className={baskerville.className + ' ' + style.slogan__title}>
                                    {'контакты'}
                                </h3>
                                <p className={style.slogan__title}>
                                    {'адрес'}
                                </p>
                            </div>
                        </div>
                        <div className={style.slogan__material}>
                            <div>
                                <h3 className={baskerville.className + ' ' + style.slogan__title}>
                                    {'слоган'}
                                </h3>
                                <p className={style.slogan__title}>
                                    {'We are the best'}
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>

    );
};

export default Slogan;