import { Fragment } from "react";

import { Box, Text } from "ink";
import { marked } from "marked";
import TerminalRenderer from "marked-terminal";

import type {
  Action,
  Block,
  Button,
  Checkboxes,
  Datepicker,
  ImageElement,
  KnownBlock,
  MrkdwnElement,
  MultiSelect,
  Overflow,
  PlainTextElement,
  RadioButtons,
  SectionBlock,
  Select,
  Timepicker,
} from "@slack/types";

// setup TerminalRenderer
marked.use({ mangle: false, headerIds: false });
marked.setOptions({ renderer: new TerminalRenderer() });

// Actually, children should be KnownBlock but I accept Block here
export function Slack({ children }: { children: (KnownBlock | Block)[] }) {
  return <>{children.map((e, i) => convertBlock(`blocks-${i}`, e))}</>;
}
export function slack2Ink({ blocks }: { blocks: (KnownBlock | Block)[] }) {
  return () => Slack({ children: blocks });
}

export function convertBlock(key: string, block: KnownBlock | Block): JSX.Element {
  assertKnownBlock(block);

  switch (block.type) {
    case "actions":
      return (
        <Fragment key={key}>{block.elements.map((e, i) => convertElement(`${key}-actions-elements-${i}`, e))}</Fragment>
      );
    case "context":
      return (
        <Fragment key={key}>
          {block.elements.map((e, i) => convertElement(`${key}-contexts-elements-${i}`, e))}
        </Fragment>
      );
    case "divider":
      return <Text key={key}>────────────────────────────────────────────────────────────────────────────────</Text>;
    case "file":
      return <Text key={key}>(file block is not yet supported)</Text>;
    case "header":
      // larger is difficult
      return (
        <Text key={key} bold>
          {block.text.text}
        </Text>
      );
    case "image":
      return <Text key={key}>(image block is not yet supported)</Text>;
    case "input":
      return <Text key={key}>(input block is not yet supported)</Text>;
    case "section":
      return (
        <Fragment key={key}>
          {convertElement(`${key}-section-text`, block.text)}
          {convertFields(`${key}-section-fields`, block.fields)}
          {convertElement(`${key}-section-accessory`, block.accessory)}
        </Fragment>
      );
    case "video":
      return <Text key={key}>(video block is not yet supported)</Text>;
  }
}

export function convertFields(key: string, fields: SectionBlock["fields"]): JSX.Element | undefined {
  if (typeof fields === "undefined") return;

  return (
    <Box key={key}>
      {fields.map((e, i) => (
        <Text>(fields is not yet supported)</Text>
      ))}
    </Box>
  );
}

export function convertElement(
  key: string,
  element: // Actions
  | Button
    | Checkboxes
    | Datepicker
    | MultiSelect
    | Overflow
    | RadioButtons
    | Select
    | Timepicker
    | Action
    // Elements
    | ImageElement
    | PlainTextElement
    | MrkdwnElement
    | undefined,
): JSX.Element | undefined {
  if (typeof element === "undefined") return;

  if ("text" in element && element.type !== "button") return convertText(key, element);
  if ("image_url" in element) return <Text key={key}>(image is not yet supported)</Text>;

  // rests are actions
  switch (element.type) {
    default:
      return <Text key={key}>(actions are not yet supported)</Text>;
  }
}

export function convertText(key: string, e: PlainTextElement | MrkdwnElement | undefined): JSX.Element | undefined {
  if (typeof e === "undefined") return;

  return e.type === "mrkdwn" ? (
    <Text key={key}>{marked(e.text.replace(/<(.+?)\|(.+?)>/g, (_, r1, r2) => `[${r2}](${r1})`))}</Text>
  ) : (
    <Text key={key}>{e.text}</Text>
  );
}

function assertKnownBlock(block: KnownBlock | Block): asserts block is KnownBlock {
  if (!["actions", "context", "divider", "file", "header", "image", "input", "section", "video"].includes(block.type)) {
    throw new Error(`unknow block: ${block.type}`);
  }
}
