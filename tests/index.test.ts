import { exampleJSXBlocks } from "../samples/fixtures/jsxslack.js";
import { richTextList, richTextQuote, richTextSection } from "../samples/fixtures/rich_text.js";
import { slack2Ink } from "../src/index.js";

describe(slack2Ink, () => {
  test("works", () => {
    expect(slack2Ink({ blocks: exampleJSXBlocks })()).toMatchInlineSnapshot(`
     {
       "$$typeof": Symbol(react.transitional.element),
       "_owner": null,
       "_store": {},
       "key": null,
       "props": {
         "children": [
           {
             "$$typeof": Symbol(react.transitional.element),
             "_owner": null,
             "_store": {},
             "key": "blocks-0",
             "props": {
               "children": [
                 {
                   "$$typeof": Symbol(react.transitional.element),
                   "_owner": null,
                   "_store": {},
                   "key": "blocks-0-section-text",
                   "props": {
                     "children": "[0mEnjoy building blocks![0m

     [0m> [3m[34mjsx-slack ([34m[4mhttps://github.com/yhatt/jsx-slack[24m[39m[34m)[39m[23m[0m
     [0m> [3mBuild JSON for Slack Block Kit from JSX[23m[0m
     [0m> [0m

     ",
                   },
                   "type": [Function],
                 },
                 undefined,
                 {
                   "$$typeof": Symbol(react.transitional.element),
                   "_owner": null,
                   "_store": {},
                   "key": "blocks-0-section-accessory",
                   "props": {
                     "children": "(image is not yet supported)",
                   },
                   "type": [Function],
                 },
               ],
             },
             "type": Symbol(react.fragment),
           },
           {
             "$$typeof": Symbol(react.transitional.element),
             "_owner": null,
             "_store": {},
             "key": "blocks-1",
             "props": {
               "children": [
                 {
                   "$$typeof": Symbol(react.transitional.element),
                   "_owner": null,
                   "_store": {},
                   "key": "blocks-1-contexts-elements-0",
                   "props": {
                     "children": "[0mMaintained by [34mYuki Hattori ([34m[4mhttps://github.com/yhatt[24m[39m[34m)[39m[0m

     ",
                   },
                   "type": [Function],
                 },
                 {
                   "$$typeof": Symbol(react.transitional.element),
                   "_owner": null,
                   "_store": {},
                   "key": "blocks-1-contexts-elements-1",
                   "props": {
                     "children": "(image is not yet supported)",
                   },
                   "type": [Function],
                 },
               ],
             },
             "type": Symbol(react.fragment),
           },
           {
             "$$typeof": Symbol(react.transitional.element),
             "_owner": null,
             "_store": {},
             "key": "blocks-2",
             "props": {
               "children": "────────────────────────────────────────────────────────────────────────────────",
             },
             "type": [Function],
           },
           {
             "$$typeof": Symbol(react.transitional.element),
             "_owner": null,
             "_store": {},
             "key": "blocks-3",
             "props": {
               "children": [
                 {
                   "$$typeof": Symbol(react.transitional.element),
                   "_owner": null,
                   "_store": {},
                   "key": "blocks-3-actions-elements-0",
                   "props": {
                     "children": "(actions are not yet supported)",
                   },
                   "type": [Function],
                 },
                 {
                   "$$typeof": Symbol(react.transitional.element),
                   "_owner": null,
                   "_store": {},
                   "key": "blocks-3-actions-elements-1",
                   "props": {
                     "children": "(actions are not yet supported)",
                   },
                   "type": [Function],
                 },
               ],
             },
             "type": Symbol(react.fragment),
           },
         ],
       },
       "type": Symbol(react.fragment),
     }
    `);
  });
});

describe("converting richTextSection", () => {
  test("works", () => {
    expect(slack2Ink({ blocks: richTextSection })()).toMatchInlineSnapshot(`
     {
       "$$typeof": Symbol(react.transitional.element),
       "_owner": null,
       "_store": {},
       "key": null,
       "props": {
         "children": [
           {
             "$$typeof": Symbol(react.transitional.element),
             "_owner": null,
             "_store": {},
             "key": "blocks-0",
             "props": {
               "children": [
                 {
                   "$$typeof": Symbol(react.transitional.element),
                   "_owner": null,
                   "_store": {},
                   "key": "blocks-0-rich_text-elements-0",
                   "props": {
                     "children": [
                       {
                         "$$typeof": Symbol(react.transitional.element),
                         "_owner": null,
                         "_store": {},
                         "key": "blocks-0-rich_text-elements-0-0",
                         "props": {
                           "bold": undefined,
                           "children": "Hello there, I am a basic rich text block!",
                           "italic": undefined,
                           "strikethrough": undefined,
                         },
                         "type": [Function],
                       },
                     ],
                   },
                   "type": [Function],
                 },
               ],
             },
             "type": Symbol(react.fragment),
           },
           {
             "$$typeof": Symbol(react.transitional.element),
             "_owner": null,
             "_store": {},
             "key": "blocks-1",
             "props": {
               "children": [
                 {
                   "$$typeof": Symbol(react.transitional.element),
                   "_owner": null,
                   "_store": {},
                   "key": "blocks-1-rich_text-elements-0",
                   "props": {
                     "children": [
                       {
                         "$$typeof": Symbol(react.transitional.element),
                         "_owner": null,
                         "_store": {},
                         "key": "blocks-1-rich_text-elements-0-0",
                         "props": {
                           "bold": undefined,
                           "children": "Hello there, ",
                           "italic": undefined,
                           "strikethrough": undefined,
                         },
                         "type": [Function],
                       },
                       {
                         "$$typeof": Symbol(react.transitional.element),
                         "_owner": null,
                         "_store": {},
                         "key": "blocks-1-rich_text-elements-0-1",
                         "props": {
                           "bold": true,
                           "children": "I am a bold rich text block!",
                           "italic": undefined,
                           "strikethrough": undefined,
                         },
                         "type": [Function],
                       },
                     ],
                   },
                   "type": [Function],
                 },
               ],
             },
             "type": Symbol(react.fragment),
           },
           {
             "$$typeof": Symbol(react.transitional.element),
             "_owner": null,
             "_store": {},
             "key": "blocks-2",
             "props": {
               "children": [
                 {
                   "$$typeof": Symbol(react.transitional.element),
                   "_owner": null,
                   "_store": {},
                   "key": "blocks-2-rich_text-elements-0",
                   "props": {
                     "children": [
                       {
                         "$$typeof": Symbol(react.transitional.element),
                         "_owner": null,
                         "_store": {},
                         "key": "blocks-2-rich_text-elements-0-0",
                         "props": {
                           "bold": undefined,
                           "children": "Hello there, ",
                           "italic": undefined,
                           "strikethrough": undefined,
                         },
                         "type": [Function],
                       },
                       {
                         "$$typeof": Symbol(react.transitional.element),
                         "_owner": null,
                         "_store": {},
                         "key": "blocks-2-rich_text-elements-0-1",
                         "props": {
                           "bold": undefined,
                           "children": "I am an italic rich text block!",
                           "italic": true,
                           "strikethrough": undefined,
                         },
                         "type": [Function],
                       },
                     ],
                   },
                   "type": [Function],
                 },
               ],
             },
             "type": Symbol(react.fragment),
           },
           {
             "$$typeof": Symbol(react.transitional.element),
             "_owner": null,
             "_store": {},
             "key": "blocks-3",
             "props": {
               "children": [
                 {
                   "$$typeof": Symbol(react.transitional.element),
                   "_owner": null,
                   "_store": {},
                   "key": "blocks-3-rich_text-elements-0",
                   "props": {
                     "children": [
                       {
                         "$$typeof": Symbol(react.transitional.element),
                         "_owner": null,
                         "_store": {},
                         "key": "blocks-3-rich_text-elements-0-0",
                         "props": {
                           "bold": undefined,
                           "children": "Hello there, ",
                           "italic": undefined,
                           "strikethrough": undefined,
                         },
                         "type": [Function],
                       },
                       {
                         "$$typeof": Symbol(react.transitional.element),
                         "_owner": null,
                         "_store": {},
                         "key": "blocks-3-rich_text-elements-0-1",
                         "props": {
                           "bold": undefined,
                           "children": "I am a strikethrough rich text block!",
                           "italic": undefined,
                           "strikethrough": true,
                         },
                         "type": [Function],
                       },
                     ],
                   },
                   "type": [Function],
                 },
               ],
             },
             "type": Symbol(react.fragment),
           },
         ],
       },
       "type": Symbol(react.fragment),
     }
    `);
  });
});

describe("converting richTextList", () => {
  test("works", () => {
    expect(slack2Ink({ blocks: richTextList })()).toMatchInlineSnapshot(`
     {
       "$$typeof": Symbol(react.transitional.element),
       "_owner": null,
       "_store": {},
       "key": null,
       "props": {
         "children": [
           {
             "$$typeof": Symbol(react.transitional.element),
             "_owner": null,
             "_store": {},
             "key": "blocks-0",
             "props": {
               "children": [
                 {
                   "$$typeof": Symbol(react.transitional.element),
                   "_owner": null,
                   "_store": {},
                   "key": "blocks-0-rich_text-elements-0",
                   "props": {
                     "children": [
                       {
                         "$$typeof": Symbol(react.transitional.element),
                         "_owner": null,
                         "_store": {},
                         "key": "blocks-0-rich_text-elements-0-0",
                         "props": {
                           "bold": undefined,
                           "children": "My favorite Slack features (in no particular order):",
                           "italic": undefined,
                           "strikethrough": undefined,
                         },
                         "type": [Function],
                       },
                     ],
                   },
                   "type": [Function],
                 },
                 {
                   "$$typeof": Symbol(react.transitional.element),
                   "_owner": null,
                   "_store": {},
                   "key": "blocks-0-rich_text-elements-1",
                   "props": {
                     "children": [
                       {
                         "$$typeof": Symbol(react.transitional.element),
                         "_owner": null,
                         "_store": {},
                         "key": "blocks-0-rich_text-elements-1-0",
                         "props": {
                           "children": [
                             {
                               "$$typeof": Symbol(react.transitional.element),
                               "_owner": null,
                               "_store": {},
                               "key": "blocks-0-rich_text-elements-1-0-text",
                               "props": {
                                 "children": [
                                   "* ",
                                   [
                                     {
                                       "$$typeof": Symbol(react.transitional.element),
                                       "_owner": null,
                                       "_store": {},
                                       "key": "blocks-0-rich_text-elements-1-0-sections-0",
                                       "props": {
                                         "bold": undefined,
                                         "children": "Huddles",
                                         "italic": undefined,
                                         "strikethrough": undefined,
                                       },
                                       "type": [Function],
                                     },
                                   ],
                                 ],
                               },
                               "type": [Function],
                             },
                             {
                               "$$typeof": Symbol(react.transitional.element),
                               "_owner": null,
                               "_store": {},
                               "key": null,
                               "props": {},
                               "type": [Function],
                             },
                           ],
                         },
                         "type": Symbol(react.fragment),
                       },
                       {
                         "$$typeof": Symbol(react.transitional.element),
                         "_owner": null,
                         "_store": {},
                         "key": "blocks-0-rich_text-elements-1-1",
                         "props": {
                           "children": [
                             {
                               "$$typeof": Symbol(react.transitional.element),
                               "_owner": null,
                               "_store": {},
                               "key": "blocks-0-rich_text-elements-1-1-text",
                               "props": {
                                 "children": [
                                   "* ",
                                   [
                                     {
                                       "$$typeof": Symbol(react.transitional.element),
                                       "_owner": null,
                                       "_store": {},
                                       "key": "blocks-0-rich_text-elements-1-1-sections-0",
                                       "props": {
                                         "bold": undefined,
                                         "children": "Canvas",
                                         "italic": undefined,
                                         "strikethrough": undefined,
                                       },
                                       "type": [Function],
                                     },
                                   ],
                                 ],
                               },
                               "type": [Function],
                             },
                             {
                               "$$typeof": Symbol(react.transitional.element),
                               "_owner": null,
                               "_store": {},
                               "key": null,
                               "props": {},
                               "type": [Function],
                             },
                           ],
                         },
                         "type": Symbol(react.fragment),
                       },
                       {
                         "$$typeof": Symbol(react.transitional.element),
                         "_owner": null,
                         "_store": {},
                         "key": "blocks-0-rich_text-elements-1-2",
                         "props": {
                           "children": [
                             {
                               "$$typeof": Symbol(react.transitional.element),
                               "_owner": null,
                               "_store": {},
                               "key": "blocks-0-rich_text-elements-1-2-text",
                               "props": {
                                 "children": [
                                   "* ",
                                   [
                                     {
                                       "$$typeof": Symbol(react.transitional.element),
                                       "_owner": null,
                                       "_store": {},
                                       "key": "blocks-0-rich_text-elements-1-2-sections-0",
                                       "props": {
                                         "bold": undefined,
                                         "children": "Developing with Block Kit",
                                         "italic": undefined,
                                         "strikethrough": undefined,
                                       },
                                       "type": [Function],
                                     },
                                   ],
                                 ],
                               },
                               "type": [Function],
                             },
                             {
                               "$$typeof": Symbol(react.transitional.element),
                               "_owner": null,
                               "_store": {},
                               "key": null,
                               "props": {},
                               "type": [Function],
                             },
                           ],
                         },
                         "type": Symbol(react.fragment),
                       },
                     ],
                   },
                   "type": [Function],
                 },
               ],
             },
             "type": Symbol(react.fragment),
           },
         ],
       },
       "type": Symbol(react.fragment),
     }
    `);
  });
});

describe("converting richTextQuote", () => {
  test("works", () => {
    expect(slack2Ink({ blocks: richTextQuote })()).toMatchInlineSnapshot(`
     {
       "$$typeof": Symbol(react.transitional.element),
       "_owner": null,
       "_store": {},
       "key": null,
       "props": {
         "children": [
           {
             "$$typeof": Symbol(react.transitional.element),
             "_owner": null,
             "_store": {},
             "key": "blocks-0",
             "props": {
               "children": [
                 {
                   "$$typeof": Symbol(react.transitional.element),
                   "_owner": null,
                   "_store": {},
                   "key": "blocks-0-rich_text-elements-0",
                   "props": {
                     "children": [
                       ">",
                       " ",
                       [
                         {
                           "$$typeof": Symbol(react.transitional.element),
                           "_owner": null,
                           "_store": {},
                           "key": "blocks-0-rich_text-elements-0-0",
                           "props": {
                             "bold": undefined,
                             "children": "What we need is good examples in our documentation.",
                             "italic": undefined,
                             "strikethrough": undefined,
                           },
                           "type": [Function],
                         },
                       ],
                     ],
                   },
                   "type": [Function],
                 },
                 {
                   "$$typeof": Symbol(react.transitional.element),
                   "_owner": null,
                   "_store": {},
                   "key": "blocks-0-rich_text-elements-1",
                   "props": {
                     "children": [
                       {
                         "$$typeof": Symbol(react.transitional.element),
                         "_owner": null,
                         "_store": {},
                         "key": "blocks-0-rich_text-elements-1-0",
                         "props": {
                           "bold": undefined,
                           "children": "Yes - I completely agree, Luke!",
                           "italic": undefined,
                           "strikethrough": undefined,
                         },
                         "type": [Function],
                       },
                     ],
                   },
                   "type": [Function],
                 },
               ],
             },
             "type": Symbol(react.fragment),
           },
         ],
       },
       "type": Symbol(react.fragment),
     }
    `);
  });
});
