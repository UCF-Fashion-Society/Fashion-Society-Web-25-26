import {useEffect} from "react";

type SEOProps ={
    title: string;
    description?: string;
};

export function useSEO({title, description}: SEOProps){
    useEffect(() => {
        document.title = title;

        if(description){
            let meta = document.querySelector('meta[name = "description"]');

            if(!meta){
                meta = document.createElement("meta");
                meta.setAttribute("name","description");
                document.head.appendChild(meta);
            }

            meta.setAttribute("content",description);
        }
    },[title,description]);
}