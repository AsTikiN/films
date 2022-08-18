import { useEffect, useState } from "react"

interface Props {
  node: HTMLElement | null;
  callback: () => any;
}

const useVisible = (node, callback) => {
  
  const [status, setStatus] = useState<boolean>(true); 

  const handleWindowScroll = (e: any) => {
    console.log(node?.offsetTop);
  } 

  useEffect(() => {
    if(!node) return;
    
    window.addEventListener("scroll", handleWindowScroll);
  }, [node])

  return {
    node,
    callback,
    status
  }
}

export default useVisible;