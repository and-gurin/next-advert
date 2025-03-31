'use client'

import Image, {StaticImageData} from "next/image";
import {baskerville} from "@/app/fonts";
import style from "./Materials.module.scss"
import React from "react";

export type ImageProps = {
    id: number,
    src: StaticImageData,
}

export type MaterialsProps = {
    images?: ImageProps[],
    title: string,
    description?: string,
}

const Materials = ({title, materials, href}: {
    title: string,
    materials: MaterialsProps[],
    href?: string
}) => {

    return (
        <section className={style.collection}>
            <div className={
                title === 'partners' ? `wrapper ${style.collection__wrapper_partner}`
                    : `wrapper ${style.collection__wrapper}`
            }>
                <Material title={title} materials={materials} href={href}/>
            </div>
        </section>
    );
};

export const Material = ({title, materials, href}: {
    title: string,
    materials: MaterialsProps[],
    href?: string
}) => {

    return (
        <>
            <div id={href} className={style.collection__header}>
                <h2 className={baskerville.className + ' ' + style.collection__title}>
                    {title}
                </h2>
            </div>
            <div className={
                title === 'leistungen' ? style.collection__grid_leistungen
            : style.collection__grid_advantages
            }>
                {materials.map((material) => {
                    return (<div className={
                            title === 'partners' ? style.collection__material_partners
                                : style.collection__material
                    }>
                            <div key={material.title}>
                                <div className={style.collection__images}>
                                    {material.images?.map(image => {
                                        return (
                                            <figure
                                                key={image.id}
                                                className={style.collection__figure}>
                                                <Image src={image.src}
                                                       className={style.collection__image}
                                                       sizes="(min-width: 100px) 50vw, 100vw"
                                                       alt='Nowoczesna meble na wymiar'/>
                                            </figure>
                                        )
                                    })}
                                </div>
                                <h3 className={baskerville.className + ' ' + style.collection__subtitle}>
                                    {material.title}
                                </h3>
                                <p className={style.collection__subtitle}>
                                    {material.description}
                                </p>
                            </div>
                    </div>

                    )
                })}
            </div>
        </>
    );
};

export default Materials;