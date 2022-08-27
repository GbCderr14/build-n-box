import sanityClient from "@sanity/client";
import imageUrlBuilder from "@sanity/image-url";

export const client = sanityClient({
	projectId: "q9pnc9vs",
	dataset: "production",
	apiVersion: "v2021-10-21",
	useCdn: true,
	// token: process.env.REACT_PUBLIC_SANITY_TOKEN,
	token: "skKLIjDjiPQpACN3aCHOaGDOvgHqMzr9omajlq16rLylx1MkG1vMn1JytuL8s449mvxVAr7wI8oY0TDE3Odv7zQAZOfSDPFzqWcoMQb7MvIoSON2oCKaEi3Z7gMCP1BDo3TcXrSmLw5HlnVEiR3XwzRDBMXILTJFHqtqRgdyy911ChrApIQf",
});

const builder = imageUrlBuilder(client);

export const urlFor = (source) => builder.image(source);
