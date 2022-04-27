import {useEffect} from 'react';

export const useFetchData = (setData,setError,setLoading,setOrignalData,orignalData, searchTerm, data, loading, error) => {
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
    }, [ ]);
    /*useEffect(() => {
        const searchText = () => {
            if(searchTerm === '') {
                setData(orignalData);
                return;
            }

            let newData = [];
            orignalData.map((key,index) => {
                if(key.title.search(searchTerm) !== -1) {
                    newData.push(key);
                }
                else if(key.body.search(searchTerm) !== -1) {
                    newData.push(key);
                }
            });
            setData(newData);
        };
        searchText();
    }, [searchTerm,orignalData,setData]);*/
};
