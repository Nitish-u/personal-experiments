export default function DetailsCard(detailsArr){
    console.log(detailsArr)
    if(detailsArr[0]){
        return(
            <div className="card">
                <div className="pic">
                    <img src={detailsArr[6]} alt="profile pic" />
                </div>
                <p className="name">Name : {detailsArr[1]}</p>
                <p className="name">Class : {detailsArr[2]}</p>
                <p className="name">Section : {detailsArr[3]}</p>
                <p className="name">Roll no. : {detailsArr[4]}</p>
                <p className="name">D.O.B : {detailsArr[5]}</p>
            </div>
        )
    }else{
        return null;
    }
}