'use client';

import { useState } from "react";

const filtros = [
    "Todos",
    "Slasher",
    "Supernatural",
    "Zombies",
    "Psychological",
    "Vampire",
];

export function ListMenu({
    onFiltroSelecionado,
}: {
    onFiltroSelecionado?: (filtro: string) => void;
}) {
    const [filtroSelecionado, setFiltroSelecionado] = useState("Todos");

    const handleFiltroClick = (filtro: string) => {
        setFiltroSelecionado(filtro);
        onFiltroSelecionado?.(filtro);
    };

    return (
        <div className="flex gap-2 flex-wrap">
            {filtros.map((filtro) => {
                const isAtivo = filtro === filtroSelecionado;
                return (
                    <button
                        key={filtro}
                        onClick={() => handleFiltroClick(filtro)}
                        className={`border border-red-500 px-4 py-1 rounded-full transition-colors duration-200
              ${isAtivo ? "bg-red-500 text-white" : "text-red-500 hover:bg-red-100"}`}
                    >
                        {filtro}
                    </button>
                );
            })}
        </div>
    );
}
