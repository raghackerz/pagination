import React from 'react';
import {useState, useEffect} from 'react';

//components
import Pagination from './Pagination';
import Spinner from './Spinner';
import SearchBar from './SearchBar';
import Card from './Card';


const Home = () => {
    const [orignalData,setOrignalData] = useState(null);
    const [data,setData] = useState(null);
    const [loading,setLoading] = useState(true);
    const [error,setError] = useState(false);
    const [displayElements,setDisplayElements] = useState([]);
    const [currentPage,setCurrentPage] = useState(1);
    const [searchTerm,setSearchTerm] = useState('');
    const [pageSize,setPageSize] = useState(5);
    const [shownPageNumbers, setShownPageNumbers] = useState(7);
    const [width, setWidth] = useState(window.innerWidth);
    useEffect(() => {
        const fetchData = async () => {
            const url = "https://jsonplaceholder.typicode.com/posts";
            try {
                const response = await (await fetch(url)).json();
                setData(response);
                setOrignalData(response);
                setError(false);
            }
            catch(err) {
                setError(true);
            }
            finally {
                setLoading(false);
            }
        };
        fetchData();
    },[]);

    const updateDimensions = () => {
        setWidth(window.innerWidth);
    }
    useEffect(() => {
        window.addEventListener("resize", updateDimensions);
        return () => window.removeEventListener("resize", updateDimensions);
    }, []);

    useEffect(() => {
        if(width <= 520) {
            setPageSize(3);
            setShownPageNumbers(1);
        }
        else if(width <= 700) {
            setPageSize(3);
            setShownPageNumbers(3);
        }
        else if(width <= 1000) {
            setPageSize(3);
            setShownPageNumbers(5);
        }
        else if(width <= 1400) {
            setPageSize(4);
        }
        else {
            setPageSize(5);
        }
    }, [width, setPageSize] );

    useEffect(() => {
        let displayElement = [];
        if(loading) return;
        if(error) return;
        for(let index = (currentPage-1)*pageSize;index < data.length && index < (currentPage-1)*pageSize + pageSize; index++) {
            let key = data[index];
            displayElement.push(<Card key={key.id} userId={key.userId} header={key.title} body={key.body}/>);
        }
        setDisplayElements(displayElement);
    },[loading, error, currentPage, setDisplayElements, data, pageSize]);

    useEffect(() => {
        const searchText = () => {
            if(error === true) return;
            if(loading === true) return;
            if(searchTerm === '') {
                setData(orignalData);
                return;
            }

            let newData = [];
            orignalData.forEach((key,index) => {
                if(key.title.search(searchTerm) !== -1) {
                    newData.push(key);
                }
                else if(key.body.search(searchTerm) !== -1) {
                    newData.push(key);
                }
                else if(key.userId.toString() === searchTerm) {
                    newData.push(key);
                }
            });
            setData(newData);
        };
        searchText();
    }, [searchTerm,orignalData,setData,loading,error]);

    //useFetchData(setData,setError,setLoading,setOrignalData);

    if(loading === true) {
        return (<Spinner/>);
    }
    if(error === true) {
        return (<div>Something went wrong....</div>);
    }

    const totalCount = data.length;


    return (
        <div>
            <SearchBar setSearchTerm={setSearchTerm}/>
            <div>{displayElements}</div>
            <Pagination totalCount={totalCount} pageSize={pageSize} currentPage={currentPage} setCurrentPage={setCurrentPage} shownPageNumbers={shownPageNumbers}/>
        </div>
    );
};

export default Home;
