import { useSearchParams } from "react-router-dom"
import { useEffect } from 'react';

const Room = () => {
    const [searchParams ] = useSearchParams()
    const roomName = searchParams.get('room')
    useEffect(() => {
        // do something with roomName
    }, [roomName])
  return (
    <div>Room: {roomName}</div>
  )
}

export default Room