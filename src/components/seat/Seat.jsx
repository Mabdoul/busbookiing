import React from 'react'

const Seat = ({seatNumber,isSelected,onClick}) => {
  return (
    <MdoutlineChair className={`text-3xl -rotate-90 cursor-pointer ${isSelected ? 'text-violet-600':'text-neutral-600'}`} onClick={onClick}/>
  
  )
}
const BusSeatLayout = ()=>{
    const totalSeats=41;
    const [selectedSeats,setSelectedSeats]=useState([]);
    const handleSeatClick=(seatNumber)=>{
        if(selectedSeats.includes(seatNumber)){
            setSelectedSeats(selectedSeats.filter((seat)=>seat!==seatNumber))
        } else{
            if(selectedSeats.length<10){
                setSelectedSeats([...selectedSeats,seatNumber])
            }else{
                alert('You can only select a maximum of 10 seats>')
            }
        }
    }

}
const renderSeats=()=>{
    let seats=[]
    for (let i=1;i<=totalSeats;i++){
        seats.push(<Seat key={i} seatNumber={i} isSelected={selectedSeats.includes(i)}
    onClick={()=>handleSeatClick(i)} />)
    }
    return seats;

}
return(
    <div className='space-y-5'>
        <h2 className="text-xl text-neutral-800 dark:text-neutral-100 font-medium">
            
        </h2>
    </div>
)
export default Seat