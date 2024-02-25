/**
 * Another approach to implementing infinite scroll is by leveraging the Intersection Observer API.
The Intersection Observer API is a modern development technique that can detect when elements appear, 
thus triggering content loading for infinite scrolling.
The Intersection Observer API observes changes in the intersection of the target elements with the ancestor or view element, 
making it well suited for implementing infinite scroll.
 */

import React, { useState, useEffect, useRef, useCallback } from "react";
import axios from "axios";
import ProductCard from "./productCard";

const InfiniteScrollingIntersectionObserver = () => {
  const [items, setItems] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [index, setIndex] = useState(2);
  const loaderRef = useRef(null);

  const fetchData = useCallback(async () => {
    if (isLoading) return;

    setIsLoading(true);
    axios
      .get(`https://api.escuelajs.co/api/v1/products?offset=${index}0&limit=12`)
      .then((res) => {
        setItems((prevItems) => [...prevItems, ...res.data]);
      })
      .catch((err) => console.log(err));

    setIndex((prevIndex) => prevIndex + 1);

    setIsLoading(false);
  }, [index, isLoading]);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      const target = entries[0];
      if (target.isIntersecting) {
        fetchData();
      }
    });

    if (loaderRef.current) {
      observer.observe(loaderRef.current);
    }

    return () => {
      if (loaderRef.current) {
        observer.unobserve(loaderRef.current);
      }
    };
  }, [fetchData]);

  useEffect(() => {
    const getData = async () => {
      setIsLoading(true);
      try {
        const response = await axios.get(
          "https://api.escuelajs.co/api/v1/products?offset=10&limit=12"
        );
        setItems(response.data);
      } catch (error) {
        console.log(error);
      }
      setIsLoading(false);
    };

    getData();
  }, []);

  return (
    <div className='container'>
      <div className='row'>
        {items.map((item, index) => (
          <ProductCard data={item} key={item.id} />
        ))}
      </div>
      <div ref={loaderRef}>{isLoading && 'Loading....'}</div>
    </div>
  );
};

export default InfiniteScrollingIntersectionObserver;