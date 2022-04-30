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

	const blurDataUrl = fromCMS ? `https:${src}?fm=webp&w=10` : null;

	return (
		<div
			className={classNames(classes.image_wrapper, className)}
			style={{ maxWidth: `${width}px` }}
		>
			<NextImage
				className={classNames(classes.image, className)}
				src={imageSource}
				placeholder={blurDataUrl ? "blur" : "empty"}
				blurDataURL={blurDataUrl}
				alt={alt}
				width={width}
				height={width / aspectRatio}
				objectFit="cover"
				{...rest}
			/>
		</div>
	);
};

export default Image;
