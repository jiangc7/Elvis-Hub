import { useEffect, useState } from "react";
import apiClient from "../services/api-client";
import { CanceledError } from "axios";
import useData from "./useData";
import { Genre } from "./useGenres";

export interface Platform{
    id:number;
    name:string;
    slug:string;
}
export interface Game{
    id:number;
    name:string;
    worklink:string;
    background_image: string;
    videolink: string;
    description: string;
    rate:number;
}



const useGames = (selectedGenre: Genre | null) => useData<Game>('/listworks',{ params:{genres: selectedGenre?.id}},[selectedGenre?.id]);
export default useGames;