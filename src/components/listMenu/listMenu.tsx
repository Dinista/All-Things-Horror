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
        <div className="flex gap-2 flex-wrap font-argentum font-[500] text-sm">
            {filtros.map((filtro) => {
                const isAtivo = filtro === filtroSelecionado;
                return (
                    <button
                        key={filtro}
                        onClick={() => handleFiltroClick(filtro)}
                        className={`border-2 border-white/10 px-4 py-1 rounded-md transition-colors duration-200
                        ${isAtivo ? "bg-defaultRed text-white font-[600] border-white/5" : "text-white/45 hover:bg-white/15"}`}
                    >
                        {filtro}
                    </button>
                );
            })}
        </div>
    );
}
