import React from 'react';
import Image from 'next/image';

interface PropsType {
  title: string;
  desc: string;
  img: string;
  tags: string[];
}

const Card: React.FC<PropsType> = ({ title, desc, img, tags }) => {
    return (
      <div data-aos="fade-up" data-aos-anchor-placement="center-bottom" className="border border-red-500 w-[300px] sm:w-[350px]">
        <div>
          <Image
            className="w-[300px] sm:w-[350px] h-auto"
            src={img}
            width={350}
            height={200}
            alt={title}
          />
        </div>
        <div className="p-4 space-y-4">
          <div className="text-2xl font-bold">{title}</div>
          <div>{desc}</div>
          <div className="flex flex-wrap gap-2">
            {tags.map((el) => (
            <div className='tags' key={el}>
                {el}
            </div>
            ))}
          </div>
        </div>
      </div>
    );
  };  

export default Card;
