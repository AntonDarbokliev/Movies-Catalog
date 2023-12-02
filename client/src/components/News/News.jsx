import { useEffect, useState } from "react"
import { NewsCard } from "../NewsCard/NewsCard.jsx"

import './News.css'
import { Spinner } from "../Shared/Spinner/Spinner.jsx"

export const News = () => {
    const [news,setNews] = useState([])
    const [isLoading,setIsLoading] = useState(true)

    function cleanText(text) {
        const cleanedTitle = text.replace(/‘/g, '\'');
        return cleanedTitle;
      }
      
    useEffect(() => {
        fetch(`https://gnews.io/api/v4/search?q=movie&in=title&lang=en&max=8&country=us&apikey=${import.meta.env.VITE_NEWS_API_KEY}`)
        .then(res => res.json())
        .then(data => {
            setNews(data.articles)
            setIsLoading(false)
        }  )
        .catch(err => console.log(err))
    },[])
    
    return (
        <>
        <h1 id="newsHeading">Popular Articles</h1>
        {isLoading && <Spinner/>}
        <div id="newsContainer">
            {news?.map(x => <NewsCard 
            key={x.publishedAt}
            title={cleanText(x.title)}
            description={cleanText(x.description)}
            url={x.url}
            source={x.source.name}
            publishedAt={x.publishedAt}
            image={x.image}
            />)}
                  
        </div>
            </>
    )
}