import React from "react";
import Expert from "./Expert";
const Experts = () => {
  const experts = [
    {
      name: "Jhon Doe",
      img: "https://st3.depositphotos.com/1017986/12808/i/950/depositphotos_128085380-stock-photo-auto-mechanic-man-or-smith.jpg",
      expertize: "Engine Experts",
    },
    {
      name: "Alexa",
      img: "https://thumbs.dreamstime.com/b/happy-auto-mechanic-man-smith-car-workshop-service-repair-maintenance-gesture-people-concept-smiling-showing-thumbs-up-78423946.jpg",
      expertize: "Polish Experts",
    },
    {
      name: "Jhon Anderson",
      img: "https://media.istockphoto.com/photos/male-mechanic-standing-by-a-car-and-smiling-at-the-camera-picture-id467714282?k=20&m=467714282&s=612x612&w=0&h=Wd74CyGfp705FeIE_XkzSCTMz8us4322esu1XDt8hEA=",
      expertize: "Machine Experts",
    },
    {
      name: "Jhon Kanedi",
      img: "https://media.istockphoto.com/photos/portrait-of-car-mechanic-man-picture-id948417646?k=20&m=948417646&s=612x612&w=0&h=r1r8S6gOSD-uXzFzBYifX34Ru_LGgoIBscI-_pLFAuo=",
      expertize: "Color Experts",
    },
    {
      name: "AlekJender",
      img: "https://res.cloudinary.com/fleetnation/image/private/c_fit,w_1120/g_south,l_text:style_gothic2:%C2%A9%20Cavan%20Images,o_20,y_10/g_center,l_watermark4,o_25,y_50/v1565730079/hsjruvck1zqsuzaiqcxi.jpg",
      expertize: "Tire Experts",
    },
    {
      name: "Larry page",
      img: "https://cdn8.dissolve.com/p/D2115_97_766/D2115_97_766_1200.jpg",
      expertize: "Machine Experts",
    },
  ];
  return (
    <>
      <h1 className="text-primary">Our Experts</h1>
      <div className="row">
        {experts.map(expert => (
          <Expert key={expert.name} expert={expert} />
        ))}
      </div>
    </>
  );
};

export default Experts;
