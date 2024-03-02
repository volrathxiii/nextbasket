import Image from "next/legacy/image"

const HeroGrid = () => {
  return (
    <div className="feature-grid">
          <div className="feature-grid-item fg-1">

            <Image
              src="https://placekitten.com/g/900/600"
              alt="Category 1"
              layout="fill"
              sizes="
                  (max-width: 693px) 100vw, 
                  (max-width: 1023px) 50vw,
                  33vw"
              objectFit='cover'
              className="feature-grid-image z-10"
              priority
            />
            <div className="feature-grid-info z-20">
              Hello world
            </div>
          </div>
          <div className="feature-grid-item fg-2">
            <Image
              src="https://placekitten.com/g/900/601"
              alt="Category 2"
              layout="fill"
              objectFit='cover'
              className="feature-grid-image"
              sizes="
                  (max-width: 693px) 100vw, 
                  (max-width: 1023px) 50vw,
                  66vw"
              priority
            />
          </div>
          <div className="feature-grid-item fg-3">
            <Image
              src="https://placekitten.com/g/921/627"
              alt="Category 3"
              layout="fill"
              objectFit='cover'
              className="feature-grid-image"
              sizes="
                  (max-width: 693px) 100vw,  
                  (max-width: 1023px) 50vw,
                  33vw"
              priority
            />
          </div>
          <div className="feature-grid-item fg-4">
            <Image
              src="https://placekitten.com/g/900/620"
              alt="Category 4"
              layout="fill"
              objectFit='cover'
              className="feature-grid-image"
              sizes="
                  (max-width: 693px) 100vw,  
                  (max-width: 1023px) 100vw,
                  33vw"
              priority
            />
          </div>
        </div>
  );
}

export default HeroGrid;