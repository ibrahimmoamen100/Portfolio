import React from "react";
import { CardBody, CardContainer, CardItem } from "@/components/ui/3d-card";

import Image from "next/image";
import me from "@/public/images/me1.png";

function DImage() {
  return (
    <CardContainer className="inter-var">
      <CardBody className="  relative group/card  dark:hover:shadow-2xl w-auto sm:w-[30rem] h-auto rounded-xl p-4   ">
        <CardItem translateZ="100">
          <div className="translate-x-2 w-96 h-96 max-w-[48vw] max-h-[48vw] relative">
            <Image alt="hero" src={me} fill />
          </div>
        </CardItem>
      </CardBody>
    </CardContainer>
  );
}

export default DImage;
