
import PostsThumbnail from "@/components/Posts/Thumbnail";
import Image from "next/legacy/image";

const PostsFeatured = () => {
  return (
    <div className="container container--tall container--sm w-full items-center justify-between text-sm">
      <div className="container-title flex flex-col flex-wrap gap-3">
        <h4 className="h6 primary-color text-center">Practise Advice</h4>
        <h2 className="h2 text-center">Featured Posts</h2>
      </div>
      <div className="flex flex-col sm:flex-row flex-wrap gap-8">
        <PostsThumbnail 
          title='The ravishing Hefeweizen'
          description="A flirty ESB feels nagging remorse, and a chain saw of the rattlesnake reads a magazine"
          image={<Image
            src="https://placekitten.com/g/300/300"
            alt="The ravishing Hefeweizen"
            layout="fill"
            objectFit='cover'
            sizes="
              (max-width: 693px) 100vw, 
              33vw"
            priority
          />}  />
        <PostsThumbnail 
          title='A crispy bullfrog brew'
          description="Some frightened Pilsner Urquell greedily buys an expensive drink for a childlike corona light."
          image={<Image
            src="https://placekitten.com/g/300/301"
            alt="A crispy bullfrog brew"
            layout="fill"
            objectFit='cover'
            sizes="
              (max-width: 693px) 100vw, 
              33vw"
            priority
          />}  />
        <PostsThumbnail 
          title='Another crank case'
          description="Now and then, the scooby snack reaches an understanding with a sake bomb about a bull ice."
          image={<Image
            src="https://placekitten.com/g/300/302"
            alt="Another crank case"
            layout="fill"
            objectFit='cover'
            sizes="
              (max-width: 693px) 100vw, 
              33vw"
            priority
          />}  />
      </div>
    </div>
  );
}

export default PostsFeatured;