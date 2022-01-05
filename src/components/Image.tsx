import classNames from "classnames";
import NextImage, { ImageProps } from "next/image";
import classes from "../styles/modules/Image.module.scss";

interface CmsImageProps extends ImageProps {
	src: string;
	alt: string;
	width: number;
	aspectRatio: number;
	fromCMS?: boolean;
	className?: string;
}

const Image: React.FC<CmsImageProps> = ({
	src,
	alt,
	width,
	aspectRatio,
	fromCMS,
	className,
	...rest
}) => {
	const imageSource = fromCMS
		? `https:${src}?fm=webp${width ? `&w=${width}` : ""}`
		: src;

	return (
		<NextImage
			className={classNames(classes.image, className)}
			src={imageSource}
			alt={alt}
			width={width}
			height={width / aspectRatio}
			objectFit="cover"
			{...rest}
		/>
	);
};

export default Image;

// <picture>
// 	{/* Bilde i webp-format */}
// 	<source
// 		srcSet={`${src}?fm=webp${width ? `&w=${width}` : ""}`}
// 		type="image/webp"
// 	/>
// 	{/* Faller tilbake på jpeg-format */}
// 	<source
// 		srcSet={`${src}?fm=jpg&fl=progressive${
// 			width ? `&w=${width}` : ""
// 		}`}
// 		type="image/jpeg"
// 	/>
// 	<img src={src} alt={alt} {...rest} />
// </picture>
