(function() {
    var type_impls = Object.fromEntries([["objc2_foundation",[["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-CGSize\" class=\"impl\"><a class=\"src rightside\" href=\"src/objc2_foundation/geometry.rs.html#131-192\">source</a><a href=\"#impl-CGSize\" class=\"anchor\">§</a><h3 class=\"code-header\">impl <a class=\"struct\" href=\"objc2_foundation/struct.CGSize.html\" title=\"struct objc2_foundation::CGSize\">CGSize</a></h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.new\" class=\"method\"><a class=\"src rightside\" href=\"src/objc2_foundation/geometry.rs.html#154-162\">source</a><h4 class=\"code-header\">pub const fn <a href=\"objc2_foundation/struct.CGSize.html#tymethod.new\" class=\"fn\">new</a>(width: <a class=\"type\" href=\"objc2_foundation/type.CGFloat.html\" title=\"type objc2_foundation::CGFloat\">CGFloat</a>, height: <a class=\"type\" href=\"objc2_foundation/type.CGFloat.html\" title=\"type objc2_foundation::CGFloat\">CGFloat</a>) -&gt; Self</h4></section></summary><div class=\"docblock\"><p>Create a new size with the given dimensions.</p>\n<h5 id=\"examples\"><a class=\"doc-anchor\" href=\"#examples\">§</a>Examples</h5>\n<div class=\"example-wrap\"><pre class=\"rust rust-example-rendered\"><code><span class=\"kw\">use </span>objc2_foundation::CGSize;\n<span class=\"kw\">let </span>size = CGSize::new(<span class=\"number\">10.0</span>, <span class=\"number\">2.3</span>);\n<span class=\"macro\">assert_eq!</span>(size.width, <span class=\"number\">10.0</span>);\n<span class=\"macro\">assert_eq!</span>(size.height, <span class=\"number\">2.3</span>);</code></pre></div>\n<p>Negative values are allowed (though often undesired).</p>\n\n<div class=\"example-wrap\"><pre class=\"rust rust-example-rendered\"><code><span class=\"kw\">use </span>objc2_foundation::CGSize;\n<span class=\"kw\">let </span>size = CGSize::new(-<span class=\"number\">1.0</span>, <span class=\"number\">0.0</span>);\n<span class=\"macro\">assert_eq!</span>(size.width, -<span class=\"number\">1.0</span>);</code></pre></div>\n</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.abs\" class=\"method\"><a class=\"src rightside\" href=\"src/objc2_foundation/geometry.rs.html#176-178\">source</a><h4 class=\"code-header\">pub fn <a href=\"objc2_foundation/struct.CGSize.html#tymethod.abs\" class=\"fn\">abs</a>(self) -&gt; Self</h4></section></summary><div class=\"docblock\"><p>Convert the size to a non-negative size.</p>\n<p>This can be used to convert the size to a safe value.</p>\n<h5 id=\"examples-1\"><a class=\"doc-anchor\" href=\"#examples-1\">§</a>Examples</h5>\n<div class=\"example-wrap\"><pre class=\"rust rust-example-rendered\"><code><span class=\"kw\">use </span>objc2_foundation::CGSize;\n<span class=\"macro\">assert_eq!</span>(CGSize::new(-<span class=\"number\">1.0</span>, <span class=\"number\">1.0</span>).abs(), CGSize::new(<span class=\"number\">1.0</span>, <span class=\"number\">1.0</span>));</code></pre></div>\n</div></details><details class=\"toggle\" open><summary><section id=\"associatedconstant.ZERO\" class=\"associatedconstant\"><a class=\"src rightside\" href=\"src/objc2_foundation/geometry.rs.html#191\">source</a><h4 class=\"code-header\">pub const <a href=\"objc2_foundation/struct.CGSize.html#associatedconstant.ZERO\" class=\"constant\">ZERO</a>: Self = _</h4></section></summary><div class=\"docblock\"><p>A size that is 0.0 in both dimensions.</p>\n<h5 id=\"examples-2\"><a class=\"doc-anchor\" href=\"#examples-2\">§</a>Examples</h5>\n<div class=\"example-wrap\"><pre class=\"rust rust-example-rendered\"><code><span class=\"kw\">use </span>objc2_foundation::CGSize;\n<span class=\"macro\">assert_eq!</span>(CGSize::ZERO, CGSize { width: <span class=\"number\">0.0</span>, height: <span class=\"number\">0.0 </span>});</code></pre></div>\n</div></details></div></details>",0,"objc2_foundation::geometry::NSSize"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-Clone-for-CGSize\" class=\"impl\"><a class=\"src rightside\" href=\"src/objc2_foundation/geometry.rs.html#114\">source</a><a href=\"#impl-Clone-for-CGSize\" class=\"anchor\">§</a><h3 class=\"code-header\">impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.82.0/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a> for <a class=\"struct\" href=\"objc2_foundation/struct.CGSize.html\" title=\"struct objc2_foundation::CGSize\">CGSize</a></h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.clone\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/objc2_foundation/geometry.rs.html#114\">source</a><a href=\"#method.clone\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://doc.rust-lang.org/1.82.0/core/clone/trait.Clone.html#tymethod.clone\" class=\"fn\">clone</a>(&amp;self) -&gt; <a class=\"struct\" href=\"objc2_foundation/struct.CGSize.html\" title=\"struct objc2_foundation::CGSize\">CGSize</a></h4></section></summary><div class='docblock'>Returns a copy of the value. <a href=\"https://doc.rust-lang.org/1.82.0/core/clone/trait.Clone.html#tymethod.clone\">Read more</a></div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.clone_from\" class=\"method trait-impl\"><span class=\"rightside\"><span class=\"since\" title=\"Stable since Rust version 1.0.0\">1.0.0</span> · <a class=\"src\" href=\"https://doc.rust-lang.org/1.82.0/src/core/clone.rs.html#174\">source</a></span><a href=\"#method.clone_from\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://doc.rust-lang.org/1.82.0/core/clone/trait.Clone.html#method.clone_from\" class=\"fn\">clone_from</a>(&amp;mut self, source: &amp;Self)</h4></section></summary><div class='docblock'>Performs copy-assignment from <code>source</code>. <a href=\"https://doc.rust-lang.org/1.82.0/core/clone/trait.Clone.html#method.clone_from\">Read more</a></div></details></div></details>","Clone","objc2_foundation::geometry::NSSize"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-Debug-for-CGSize\" class=\"impl\"><a class=\"src rightside\" href=\"src/objc2_foundation/geometry.rs.html#114\">source</a><a href=\"#impl-Debug-for-CGSize\" class=\"anchor\">§</a><h3 class=\"code-header\">impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.82.0/core/fmt/trait.Debug.html\" title=\"trait core::fmt::Debug\">Debug</a> for <a class=\"struct\" href=\"objc2_foundation/struct.CGSize.html\" title=\"struct objc2_foundation::CGSize\">CGSize</a></h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.fmt\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/objc2_foundation/geometry.rs.html#114\">source</a><a href=\"#method.fmt\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://doc.rust-lang.org/1.82.0/core/fmt/trait.Debug.html#tymethod.fmt\" class=\"fn\">fmt</a>(&amp;self, f: &amp;mut <a class=\"struct\" href=\"https://doc.rust-lang.org/1.82.0/core/fmt/struct.Formatter.html\" title=\"struct core::fmt::Formatter\">Formatter</a>&lt;'_&gt;) -&gt; <a class=\"type\" href=\"https://doc.rust-lang.org/1.82.0/core/fmt/type.Result.html\" title=\"type core::fmt::Result\">Result</a></h4></section></summary><div class='docblock'>Formats the value using the given formatter. <a href=\"https://doc.rust-lang.org/1.82.0/core/fmt/trait.Debug.html#tymethod.fmt\">Read more</a></div></details></div></details>","Debug","objc2_foundation::geometry::NSSize"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-Default-for-CGSize\" class=\"impl\"><a class=\"src rightside\" href=\"src/objc2_foundation/geometry.rs.html#114\">source</a><a href=\"#impl-Default-for-CGSize\" class=\"anchor\">§</a><h3 class=\"code-header\">impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.82.0/core/default/trait.Default.html\" title=\"trait core::default::Default\">Default</a> for <a class=\"struct\" href=\"objc2_foundation/struct.CGSize.html\" title=\"struct objc2_foundation::CGSize\">CGSize</a></h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.default\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/objc2_foundation/geometry.rs.html#114\">source</a><a href=\"#method.default\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://doc.rust-lang.org/1.82.0/core/default/trait.Default.html#tymethod.default\" class=\"fn\">default</a>() -&gt; <a class=\"struct\" href=\"objc2_foundation/struct.CGSize.html\" title=\"struct objc2_foundation::CGSize\">CGSize</a></h4></section></summary><div class='docblock'>Returns the “default value” for a type. <a href=\"https://doc.rust-lang.org/1.82.0/core/default/trait.Default.html#tymethod.default\">Read more</a></div></details></div></details>","Default","objc2_foundation::geometry::NSSize"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-Encode-for-CGSize\" class=\"impl\"><a class=\"src rightside\" href=\"src/objc2_foundation/geometry.rs.html#122-125\">source</a><a href=\"#impl-Encode-for-CGSize\" class=\"anchor\">§</a><h3 class=\"code-header\">impl <a class=\"trait\" href=\"objc2/encode/trait.Encode.html\" title=\"trait objc2::encode::Encode\">Encode</a> for <a class=\"struct\" href=\"objc2_foundation/struct.CGSize.html\" title=\"struct objc2_foundation::CGSize\">CGSize</a></h3></section></summary><div class=\"impl-items\"><details class=\"toggle\" open><summary><section id=\"associatedconstant.ENCODING\" class=\"associatedconstant trait-impl\"><a class=\"src rightside\" href=\"src/objc2_foundation/geometry.rs.html#123-124\">source</a><a href=\"#associatedconstant.ENCODING\" class=\"anchor\">§</a><h4 class=\"code-header\">const <a href=\"objc2/encode/trait.Encode.html#associatedconstant.ENCODING\" class=\"constant\">ENCODING</a>: <a class=\"enum\" href=\"objc2_encode/encoding/enum.Encoding.html\" title=\"enum objc2_encode::encoding::Encoding\">Encoding</a> = _</h4></section></summary><div class='docblock'>The Objective-C type-encoding for this type.</div></details></div></details>","Encode","objc2_foundation::geometry::NSSize"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-PartialEq-for-CGSize\" class=\"impl\"><a class=\"src rightside\" href=\"src/objc2_foundation/geometry.rs.html#114\">source</a><a href=\"#impl-PartialEq-for-CGSize\" class=\"anchor\">§</a><h3 class=\"code-header\">impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.82.0/core/cmp/trait.PartialEq.html\" title=\"trait core::cmp::PartialEq\">PartialEq</a> for <a class=\"struct\" href=\"objc2_foundation/struct.CGSize.html\" title=\"struct objc2_foundation::CGSize\">CGSize</a></h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.eq\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/objc2_foundation/geometry.rs.html#114\">source</a><a href=\"#method.eq\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://doc.rust-lang.org/1.82.0/core/cmp/trait.PartialEq.html#tymethod.eq\" class=\"fn\">eq</a>(&amp;self, other: &amp;<a class=\"struct\" href=\"objc2_foundation/struct.CGSize.html\" title=\"struct objc2_foundation::CGSize\">CGSize</a>) -&gt; <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.82.0/std/primitive.bool.html\">bool</a></h4></section></summary><div class='docblock'>Tests for <code>self</code> and <code>other</code> values to be equal, and is used by <code>==</code>.</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.ne\" class=\"method trait-impl\"><span class=\"rightside\"><span class=\"since\" title=\"Stable since Rust version 1.0.0\">1.0.0</span> · <a class=\"src\" href=\"https://doc.rust-lang.org/1.82.0/src/core/cmp.rs.html#261\">source</a></span><a href=\"#method.ne\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://doc.rust-lang.org/1.82.0/core/cmp/trait.PartialEq.html#method.ne\" class=\"fn\">ne</a>(&amp;self, other: <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.82.0/std/primitive.reference.html\">&amp;Rhs</a>) -&gt; <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.82.0/std/primitive.bool.html\">bool</a></h4></section></summary><div class='docblock'>Tests for <code>!=</code>. The default implementation is almost always sufficient,\nand should not be overridden without very good reason.</div></details></div></details>","PartialEq","objc2_foundation::geometry::NSSize"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-RefEncode-for-CGSize\" class=\"impl\"><a class=\"src rightside\" href=\"src/objc2_foundation/geometry.rs.html#127-129\">source</a><a href=\"#impl-RefEncode-for-CGSize\" class=\"anchor\">§</a><h3 class=\"code-header\">impl <a class=\"trait\" href=\"objc2/encode/trait.RefEncode.html\" title=\"trait objc2::encode::RefEncode\">RefEncode</a> for <a class=\"struct\" href=\"objc2_foundation/struct.CGSize.html\" title=\"struct objc2_foundation::CGSize\">CGSize</a></h3></section></summary><div class=\"impl-items\"><details class=\"toggle\" open><summary><section id=\"associatedconstant.ENCODING_REF\" class=\"associatedconstant trait-impl\"><a class=\"src rightside\" href=\"src/objc2_foundation/geometry.rs.html#128\">source</a><a href=\"#associatedconstant.ENCODING_REF\" class=\"anchor\">§</a><h4 class=\"code-header\">const <a href=\"objc2/encode/trait.RefEncode.html#associatedconstant.ENCODING_REF\" class=\"constant\">ENCODING_REF</a>: <a class=\"enum\" href=\"objc2_encode/encoding/enum.Encoding.html\" title=\"enum objc2_encode::encoding::Encoding\">Encoding</a> = _</h4></section></summary><div class='docblock'>The Objective-C type-encoding for a reference of this type. <a href=\"objc2/encode/trait.RefEncode.html#associatedconstant.ENCODING_REF\">Read more</a></div></details></div></details>","RefEncode","objc2_foundation::geometry::NSSize"],["<section id=\"impl-Copy-for-CGSize\" class=\"impl\"><a class=\"src rightside\" href=\"src/objc2_foundation/geometry.rs.html#114\">source</a><a href=\"#impl-Copy-for-CGSize\" class=\"anchor\">§</a><h3 class=\"code-header\">impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.82.0/core/marker/trait.Copy.html\" title=\"trait core::marker::Copy\">Copy</a> for <a class=\"struct\" href=\"objc2_foundation/struct.CGSize.html\" title=\"struct objc2_foundation::CGSize\">CGSize</a></h3></section>","Copy","objc2_foundation::geometry::NSSize"],["<section id=\"impl-StructuralPartialEq-for-CGSize\" class=\"impl\"><a class=\"src rightside\" href=\"src/objc2_foundation/geometry.rs.html#114\">source</a><a href=\"#impl-StructuralPartialEq-for-CGSize\" class=\"anchor\">§</a><h3 class=\"code-header\">impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.82.0/core/marker/trait.StructuralPartialEq.html\" title=\"trait core::marker::StructuralPartialEq\">StructuralPartialEq</a> for <a class=\"struct\" href=\"objc2_foundation/struct.CGSize.html\" title=\"struct objc2_foundation::CGSize\">CGSize</a></h3></section>","StructuralPartialEq","objc2_foundation::geometry::NSSize"]]]]);
    if (window.register_type_impls) {
        window.register_type_impls(type_impls);
    } else {
        window.pending_type_impls = type_impls;
    }
})()
//{"start":55,"fragment_lengths":[15414]}