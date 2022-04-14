/**
 * Retrieves the translation of text.
 *
 * @see https://developer.wordpress.org/block-editor/packages/packages-i18n/
 */
import { __ } from "@wordpress/i18n";

/**
 * React hook that is used to mark the block wrapper element.
 * It provides all the necessary props like the class name.
 *
 * @see https://developer.wordpress.org/block-editor/packages/packages-block-editor/#useBlockProps
 */
import {
	useBlockProps,
	InspectorControls,
	RichText,
} from "@wordpress/block-editor";
import {
	Panel,
	PanelBody,
	PanelRow,
	ColorPicker,
	SelectControl,
	RangeControl,
} from "@wordpress/components";
/**
 * Lets webpack process CSS, SASS or SCSS files referenced in JavaScript files.
 * Those files can contain any CSS code that gets applied to the editor.
 *
 * @see https://www.npmjs.com/package/@wordpress/scripts#using-css
 */
import "./editor.scss";

/**
 * The edit function describes the structure of your block in the context of the
 * editor. This represents what the editor will render when the block is used.
 *
 * @see https://developer.wordpress.org/block-editor/developers/block-api/block-edit-save/#edit
 *
 * @return {WPElement} Element to render.
 */
export default function Edit({ attributes, setAttributes }) {
	const { borderColor, borderRadius, borderWidth, borderStyle, content } =
		attributes;

	const btnBorder = {
		borderStyle: borderStyle,
		borderWidth: borderWidth,
		borderColor: borderColor,
		borderRadius: borderRadius,
	};

	return (
		<>
			<InspectorControls>
				<Panel>
					<PanelBody>
						<PanelRow>
							<ColorPicker
								color={borderColor}
								onChange={(newBorderColor) =>
									setAttributes({ borderColor: newBorderColor })
								}
								defaultValue="#000"
							/>
						</PanelRow>
						<PanelRow>
							<RangeControl
								label={__("Border Width", "go-to-top")}
								value={borderWidth}
								onChange={(newWidth) =>
									setAttributes({ borderWidth: newWidth })
								}
								min={0}
								max={100}
							/>
						</PanelRow>
						<PanelRow>
							<RangeControl
								label={__("Border Redius", "go-to-top")}
								value={borderRadius}
								onChange={(newRadius) =>
									setAttributes({ borderRadius: newRadius })
								}
								min={0}
								max={30}
							/>
						</PanelRow>
						<PanelRow>
							<SelectControl
								label={__("Border Style", "go-to-top")}
								value={borderStyle}
								options={[
									{ label: __("Dotted", "go-to-top"), value: "dotted" },
									{ label: __("Dashed", "go-to-top"), value: "dashed" },
									{ label: __("Solid", "go-to-top"), value: "solid" },
									{ label: __("Double", "go-to-top"), value: "double" },
									{ label: __("Groove", "go-to-top"), value: "groove" },
									{ label: __("Ridge", "go-to-top"), value: "ridge" },
									{ label: __("Solid", "go-to-top"), value: "100%" },
									{ label: __("Inset", "go-to-top"), value: "inset" },
									{ label: __("Small", "go-to-top"), value: "25%" },
									{ label: __("Outset", "go-to-top"), value: "outset" },
									{ label: __("None", "go-to-top"), value: "none" },
								]}
								onChange={(newStyle) =>
									setAttributes({ borderStyle: newStyle })
								}
							/>
						</PanelRow>
					</PanelBody>
				</Panel>
			</InspectorControls>

			<div {...useBlockProps({ style: btnBorder })}>
				<RichText
					value={content}
					onChange={(content) => setAttributes({ content })}
					placeholder={__("Add text..", "go-to-top")}
				/>
			</div>
		</>
	);
}
