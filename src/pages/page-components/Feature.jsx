import "./Feature.css"
import i1 from "../../assets/features/f1.png"
import i2 from "../../assets/features/f2.png"
import i3 from "../../assets/features/f3.png"
import i4 from "../../assets/features/f4.png"
import i5 from "../../assets/features/f5.png"
import i6 from "../../assets/features/f6.png"
const imgLinks=[i1,i2,i3,i4,i5,i6]
const features=["Free Shipping","Online Order","Save Money","Promotions","Happy Sell","24/7 Support"]
const demoBackendResponse=new Array(6)
for(let i=0;i<6;i++){
  demoBackendResponse[i]={id:i,imgSrc:imgLinks[i],feature:features[i]}
}
const FeatureBox = ({imgSrc,feature}) =>{
    return(
        <div className="fe-box">
                <img src={imgSrc} alt={feature}/>
                <h6>{feature}</h6>
        </div>
    )
}

const Feature = () => {
  return (
    <section className="feature section-p1">
        {demoBackendResponse.map(({id,imgSrc,feature},index)=>{
          return(
            /*key=feature-id is used because key must be unique amoung all no only inside map say <Feature key=1> 
            can actually contadict with another <Feature1 key=1 > so use id's instead of index ensure within map uniquness
            and using string template ENSURES OVERALL UNIQUESS IN WHOLE APP NOT ONLY UNIQUE INSIDE MAP*/
            <FeatureBox key={`feature-${id}`} imgSrc={imgSrc} feature={feature}/>
          )
        })}
    </section>
  )
}

export default Feature

// const [features, setFeatures] = useState([]);
// const [page, setPage] = useState(1);

// useEffect(() => {
//   const fetchFeatures = async () => {
//     const res = await fetch(`/api/features?page=${page}&limit=20`);
//     if (!res.ok) throw new Error("Failed to fetch");
//     const data = await res.json();

//     // Append new data instead of replacing
//     setFeatures(prev => [...prev, ...data]);
//   };

//   fetchFeatures();
// }, [page]);
