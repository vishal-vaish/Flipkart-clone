import { Input, Button, HStack, Box, VStack } from '@chakra-ui/react';
import React, {useCallback, useState, useEffect} from 'react'
import { searches } from '../Utils/searches';
import { useNavigate } from "react-router-dom";
import { Search2Icon } from '@chakra-ui/icons';

const SearchComp = () => {
    const navigate = useNavigate();
    const [query, setQuery] = useState("");
    const [suggestions, setSuggestions] = useState([]);
    const [inputval, setInputval] = useState("");

  useEffect(()=>{
    if(query===""){
       
    }
    else{
      let textQuery = query.trim().toLowerCase();
      const newSuggestions = searches.filter((item)=>{
      return item.search.toLowerCase().indexOf(textQuery) !== -1 ? true : false;
    }).map(items => items.search)
    setSuggestions(newSuggestions);
  }
  },[query]);

  const handleChange = useCallback((e)=>{
    setInputval(e.target.value);
  },[])

  useEffect(()=>{
    setQuery(inputval);
},[inputval])
  return (
    <VStack max-width="28rem">
      <HStack spacing="0">
        <Input value={inputval} onChange={handleChange} placeholder= " What is on your mind today?" size='md' w="45rem" bg="#e9f6f7" />
        <Button onClick={() => navigate("/mobile")} bg='#e9f6f7' px="2rem" m="20rem" color="#2874f0" variant='solid'>Search</Button>
      </HStack>
    </VStack>
  )
}

export default SearchComp