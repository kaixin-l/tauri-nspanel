searchState.loadedDescShard("cssparser", 0, "Implementation of CSS Syntax Module Level 3 for Rust.\n<code>&lt;angle&gt;</code>\nEither an angle or a number.\nA <code>&lt;at-keyword-token&gt;</code>\nThe finished representation of an at-rule.\nThe body of an ‘@’ rule was invalid.\nAn <code>@</code> rule was encountered that was invalid.\nA trait to provide various parsing of at-rules.\nThe return value for <code>AtRuleParser::parse_prelude</code>. …\nA <code>&lt;bad-string-token&gt;</code>\nA <code>&lt;bad-url-token&gt;</code>\nA fundamental parse error from a built-in parsing routine.\nThe funamental parsing errors that can be triggered by …\nDetails about a <code>BasicParseError</code>\nA <code>--&gt;</code> <code>&lt;CDC-token&gt;</code>\nA <code>&lt;!--</code> <code>&lt;CDO-token&gt;</code>\nA <code>&lt;}-token&gt;</code>\nA <code>&lt;)-token&gt;</code>\nA <code>&lt;]-token&gt;</code>\nA <code>:</code> <code>&lt;colon-token&gt;</code>\nA  value.\nA trait that can be used to hook into how <code>cssparser</code> parses …\nA <code>,</code> <code>&lt;comma-token&gt;</code>\nA comment.\nA string that is either shared (heap-allocated and …\nA <code>fmt::Write</code> adapter that escapes text for writing as a …\nA <code>&lt;{-token&gt;</code>\nThe ‘currentcolor’ keyword\nA parse error reported by downstream consumer code.\nA <code>|=</code> <code>&lt;dash-match-token&gt;</code>\nThe finished representation of a declaration.\nProvides an iterator for declaration list parsing.\nA trait to provide various parsing of declaration values.\nA <code>&lt;delim-token&gt;</code>\n<code>Delimiters</code> constants.\nA set of characters, to be used with the …\nA <code>&lt;dimension-token&gt;</code>\nOne character encoding\nAbstraction for avoiding a dependency from cssparser to an …\nThe end of the input was encountered unexpectedly.\nThe error type that is included in the ParseError value …\nThe error type that is included in the ParseError value …\nThe error type that is included in the ParseError value …\nA custom error type that can be returned from the parsing …\nA <code>&lt;function-token&gt;</code>\nA <code>&lt;hash-token&gt;</code> with the type flag set to “unrestricted”\nA <code>&lt;hash-token&gt;</code> with the type flag set to “id”\nA <code>&lt;ident-token&gt;</code>\nA <code>~=</code> <code>&lt;include-match-token&gt;</code>\n<code>&lt;number&gt;</code>.\n<code>&lt;number&gt;</code>.\nA <code>&lt;number-token&gt;</code>\nEither a number or a percentage.\nA <code>&lt;(-token&gt;</code>\nExtensible parse errors that can be encountered by client …\nDetails of a <code>ParseError</code>\nA CSS parser that borrows its <code>&amp;str</code> input, yields <code>Token</code>s, …\nThe owned input for a parser.\nA capture of the internal state of a <code>Parser</code> (including the …\n<code>&lt;percentage&gt;</code>\nA <code>&lt;percentage-token&gt;</code>\nA <code>^=</code> <code>&lt;prefix-match-token&gt;</code>\nThe intermediate representation of a qualified rule …\nThe intermediate representation of prelude of an at-rule …\nThe intermediate representation of prelude of an at-rule …\nThe finished representation of a qualified rule.\nA qualified rule was encountered that was invalid.\nA trait to provide various parsing of qualified rules.\nA <code>&lt;string-token&gt;</code>\nA color with red, green, blue, and alpha components, in a …\nEverything else gets converted to RGBA during parsing\nProvides an iterator for rule list parsing.\nA <code>;</code> <code>&lt;semicolon-token&gt;</code>\nThe line and column number for a given position within the …\nA position from the start of the input, counted in UTF-8 …\nA <code>&lt;[-token&gt;</code>\nA <code>*=</code> <code>&lt;substring-match-token&gt;</code>\nA <code>$=</code> <code>&lt;suffix-match-token&gt;</code>\nTrait for things the can serialize themselves in CSS …\nOne of the pieces the CSS input is broken into.\nA category of token. See the <code>needs_separator_when_before</code> …\nAn unexpected token was encountered.\nOne contiguous range of code points.\nA <code>&lt;url-token&gt;</code>\nA <code>&lt;whitespace-token&gt;</code>\nThe at-rule is expected to have a a <code>{ /* ... */ }</code> block. …\nThe at-rule is expected to end with a <code>;</code> semicolon. …\nThe alpha component.\nReturns the alpha channel in a floating point number form, …\nDefine a function …\nExtract the fundamental parse error from an extensible …\nThe blue component.\nReturns the blue channel in a floating point number form, …\nReturns the current byte index in the original input.\nThe column number within a line, starting at 1 for first …\nReturn the current line that is being parsed.\nThe current line number and column number.\nThe source map URL, if known.\nThe source URL, if known.\nInclusive end of the range. In [0, 0x10FFFF].\nParse a <code>:</code> .\nParse a <code>,</code> .\nParse a <code>{ /* ... */ }</code> curly brackets block.\nParse a  with the given value.\nCheck whether the input is exhausted. That is, if <code>.next()</code> …\nParse a  token and return its name.\nParse a  token whose name is an ASCII-insensitive match …\nParse a  and return the unescaped value.\nexpect_ident, but clone the CowRcStr\nParse a  whose unescaped value is an ASCII-insensitive …\nParse either a  or a , and return the unescaped value.\nParse a  that does not have a fractional part, and return …\nParse the input until exhaustion and check that it …\nParse a  and return the integer value.\nParse a <code>( /* ... */ )</code> parenthesis block.\nParse a  and return the value. <code>0%</code> and <code>100%</code> map to <code>0.0</code> and …\nParse a <code>;</code> .\nParse a <code>[ /* ... */ ]</code> square brackets block.\nParse a  and return the unescaped value.\nexpect_string, but clone the CowRcStr\nParse a  and return the unescaped value.\nParse either a  or a , and return the unescaped value.\nParse a  and return its value.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nConstructs a new RGBA value from float components. It …\nhttps://encoding.spec.whatwg.org/#concept-encoding-get\nThe green component.\nReturns the green channel in a floating point number form, …\nThe input given to <code>DeclarationListParser::new</code>\nThe input given to <code>RuleListParser::new</code>\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nLike <code>std::convert::Into::into</code>\nCalls <code>U::from(self)</code>.\nLike <code>std::convert::Into::into</code>\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCheck whether the input is exhausted. That is, if <code>.next()</code> …\nReturn whether this token represents a parse error.\nWhether the given encoding is UTF-16BE or UTF-16LE\nDetails of this error\nDetails of this error\nThe line number, starting at 0 for the first line, unless …\nLocation where this error occurred\nLocation where this error occurred\nStart looking for <code>var()</code> / <code>env()</code> functions. (See the …\nExpand a TokenStream corresponding to the <code>match_byte</code> macro.\nExpands to a <code>match</code> expression with string patterns, …\nReturn true if, when a token of category <code>self</code> is …\nCreate a new <code>DeclarationListParser</code> for the given <code>input</code> and …\nCreate a new input for a parser.\nCreate a new parser\nWrap a text writer to create a <code>CssStringWriter</code>.\nSame thing, but with <code>u8</code> values instead of floats in the 0 …\nCreate a new BasicParseError at the current location\nCreate a new unexpected token BasicParseError at the …\nCreate a new BasicParseError at this location for an …\nCreate a new custom BasicParseError at the current location\nCreate a new custom ParseError at this location\nCreate a new basic ParseError at the current location\nCreate a new unexpected token or EOF ParseError at the …\nSame is <code>new_for_stylesheet</code>, but should be used for rule …\nCreate a new <code>RuleListParser</code> for the given <code>input</code> at the …\nCreate a new unexpected token ParseError at the current …\nCreate a new ParseError at this location for an unexpected …\nCreate a new input for a parser.  Line numbers in locations\nReturn the next token in the input that is neither …\nSame as <code>Parser::next</code>, but does not skip whitespace tokens.\nSame as <code>Parser::next</code>, but does not skip whitespace or …\nReturn a value that represents the absence of a token, …\nParse a  value, per CSS Color Module Level 3.\nhttps://drafts.csswg.org/css-syntax/#urange-syntax\nParse an <code>&lt;angle&gt;</code> or <code>&lt;number&gt;</code>.\nParse an <code>&lt;angle&gt;</code> or <code>&lt;number&gt;</code>.\nParse the content of a <code>{ /* ... */ }</code> block for the body of …\nParse the content of a <code>{ /* ... */ }</code> block for the body of …\nParse the content of a <code>{ /* ... */ }</code> block for the body of …\nParse the content of a <code>{ /* ... */ }</code> block for the body of …\nReturn the named color with the given name.\nParse a list of comma-separated values, all with the same …\nHave the given closure parse something, then check the the …\nParse a color hash, without the leading ‘#’ character.\nParse <code>!important</code>.\nParse the content of a block or function.\nParse the <em>An+B</em> notation, as found in the <code>:nth-child()</code> …\nParse a <code>&lt;number&gt;</code> value.\nParse a <code>&lt;number&gt;</code> value.\nParse a <code>&lt;number&gt;</code> value or a <code>&lt;percentage&gt;</code> value.\nParse a <code>&lt;number&gt;</code> value or a <code>&lt;percentage&gt;</code> value.\nParse a single declaration, such as an <code>( /* ... */ )</code> …\nParse a single rule, such as for CSSOM’s …\nParse a <code>&lt;percentage&gt;</code> value.\nParse a <code>&lt;percentage&gt;</code> value.\nParse the prelude of an at-rule with the given <code>name</code>.\nParse the prelude of an at-rule with the given <code>name</code>.\nParse the prelude of a qualified rule. For style rules, …\nParse the prelude of a qualified rule. For style rules, …\nLike <code>parse_until_before</code>, but also consume the delimiter …\nLimit parsing to until a given delimiter or the end of the …\nParse the value of a declaration with the given <code>name</code>.\nParse a  value, per CSS Color Module Level 3.\nThe parser given to <code>DeclarationListParser::new</code>\nThe parser given to <code>RuleListParser::new</code>\nReturn the current position within the input.\nThe position from the start of the input, counted in UTF-8 …\nThe red component.\nReturns the red channel in a floating point number form, …\nRestore the internal state of the parser (including …\nEnd an at-rule which doesn’t have block. Return the …\nEnd an at-rule which doesn’t have block. Return the …\nReturn whether a <code>var()</code> or <code>env()</code> function has been seen by …\nCategorize a token into a type that determines when <code>/**/</code> …\nWrite a CSS identifier, escaping characters as necessary.\nWrite a CSS name, like a custom property name.\nWrite a double-quoted CSS string token, escaping content …\nIf this value is <code>TokenSerializationType::nothing()</code>, set it …\nAdvance the input until the next token that’s not …\nReturn a slice of the CSS input\nReturn a slice of the CSS input, from the given position …\nThe line number and column number\nInclusive start of the range. In [0, end].\nReturn the current internal state of the parser (including …\nDetermine the character encoding of a CSS stylesheet.\nSerialize <code>self</code> in CSS syntax, writing to <code>dest</code>.\nSerialize <code>self</code> in CSS syntax and return a string.\nSerialize <code>self</code> in CSS syntax and return a string.\nReturns a transparent color.\nThe old name of <code>try_parse</code>, which requires raw identifiers …\nExecute the given closure, passing it the parser. If the …\nReturn the UTF-8 encoding\nThe value as a number of degrees.\nThe numeric value parsed, as a float.\nThe delimiter set with only the <code>!</code> exclamation point\nThe delimiter set with only the <code>,</code> comma\nThe delimiter set with only the <code>{</code> opening curly bracket\nThe empty delimiter set\nThe delimiter set with only the <code>;</code> semicolon\nThe value as a float, divided by 100 so that the nominal …\nThe numeric value parsed, as a float.\nWhether the number had a <code>+</code> or <code>-</code> sign.\nWhether the number had a <code>+</code> or <code>-</code> sign.\nWhether the number had a <code>+</code> or <code>-</code> sign.\nIf the origin source did not include a fractional part, …\nIf the origin source did not include a fractional part, …\nIf the origin source did not include a fractional part, …\nThe unit, e.g. “px” in <code>12px</code>\nThe value as a float, divided by 100 so that the nominal …\nThe value as a float\nThe value as a float")