import React, { useEffect, useState } from 'react';
import NewsItem from './NewsItem';

const NewsBoard = ({ category, country }) => {
  const [article, setArticle] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const provideApiData = async () => {
      try {
        const response = await fetch(`https://newsapi.org/v2/top-headlines?country=${country}&category=${category}&apiKey=a04054ee53624d8080a7b9cd80a04d40`);
        const data = await response.json();
        setArticle(data.articles);
      } catch (error) {
        setError("Error fetching news data. Please try again later.");
        // console.error('Error fetching news data:', error);
      } finally {
        setLoading(false);
      }
    };

    // Reset state when category or country changes
    setArticle([]);
    setError(null);
    setLoading(true);

    provideApiData();
  }, [category, country]);

  return (
    <div>
      <h2 className='text-center'>Latest <span className='badge bg-danger'>News</span></h2>
      
      {loading && (
        <div className="d-flex justify-content-center align-items-center">
          <div className="spinner-border text-danger" role="status"></div>
          <p className='text-center mx-2'>Loading...</p>

        </div>
      )}
      
      {error && <p className="text-center text-danger">{error}</p>}
        
      {Array.isArray(article) &&
        article.map((news, index) => (
          <NewsItem key={index} title={news.title} desc={news.description} src={news.urlToImage} url={news.url} />
        ))}
    </div>
  );
};

export default NewsBoard;
