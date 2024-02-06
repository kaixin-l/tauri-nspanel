(function() {var type_impls = {
"objc_id":[["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-Id%3CT,+O%3E\" class=\"impl\"><a class=\"src rightside\" href=\"src/objc_id/id.rs.html#42-65\">source</a><a href=\"#impl-Id%3CT,+O%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;T, O&gt; <a class=\"struct\" href=\"objc_id/struct.Id.html\" title=\"struct objc_id::Id\">Id</a>&lt;T, O&gt;<span class=\"where fmt-newline\">where\n    T: <a class=\"trait\" href=\"objc/message/trait.Message.html\" title=\"trait objc::message::Message\">Message</a>,\n    O: <a class=\"trait\" href=\"objc_id/trait.Ownership.html\" title=\"trait objc_id::Ownership\">Ownership</a>,</span></h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.from_ptr\" class=\"method\"><a class=\"src rightside\" href=\"src/objc_id/id.rs.html#51-54\">source</a><h4 class=\"code-header\">pub unsafe fn <a href=\"objc_id/struct.Id.html#tymethod.from_ptr\" class=\"fn\">from_ptr</a>(ptr: <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.75.0/std/primitive.pointer.html\">*mut T</a>) -&gt; <a class=\"struct\" href=\"objc_id/struct.Id.html\" title=\"struct objc_id::Id\">Id</a>&lt;T, O&gt;</h4></section></summary><div class=\"docblock\"><p>Constructs an <code>Id</code> from a pointer to an unretained object and\nretains it. Panics if the pointer is null.\nUnsafe because the pointer must be to a valid object and\nthe caller must ensure the ownership is correct.</p>\n</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.from_retained_ptr\" class=\"method\"><a class=\"src rightside\" href=\"src/objc_id/id.rs.html#61-64\">source</a><h4 class=\"code-header\">pub unsafe fn <a href=\"objc_id/struct.Id.html#tymethod.from_retained_ptr\" class=\"fn\">from_retained_ptr</a>(ptr: <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.75.0/std/primitive.pointer.html\">*mut T</a>) -&gt; <a class=\"struct\" href=\"objc_id/struct.Id.html\" title=\"struct objc_id::Id\">Id</a>&lt;T, O&gt;</h4></section></summary><div class=\"docblock\"><p>Constructs an <code>Id</code> from a pointer to a retained object; this won’t\nretain the pointer, so the caller must ensure the object has a +1\nretain count. Panics if the pointer is null.\nUnsafe because the pointer must be to a valid object and\nthe caller must ensure the ownership is correct.</p>\n</div></details></div></details>",0,"objc_id::id::ShareId"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-Debug-for-Id%3CT,+O%3E\" class=\"impl\"><a class=\"src rightside\" href=\"src/objc_id/id.rs.html#121-125\">source</a><a href=\"#impl-Debug-for-Id%3CT,+O%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;T, O&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.75.0/core/fmt/trait.Debug.html\" title=\"trait core::fmt::Debug\">Debug</a> for <a class=\"struct\" href=\"objc_id/struct.Id.html\" title=\"struct objc_id::Id\">Id</a>&lt;T, O&gt;<span class=\"where fmt-newline\">where\n    T: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.75.0/core/fmt/trait.Debug.html\" title=\"trait core::fmt::Debug\">Debug</a>,</span></h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.fmt\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/objc_id/id.rs.html#122-124\">source</a><a href=\"#method.fmt\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://doc.rust-lang.org/1.75.0/core/fmt/trait.Debug.html#tymethod.fmt\" class=\"fn\">fmt</a>(&amp;self, f: &amp;mut <a class=\"struct\" href=\"https://doc.rust-lang.org/1.75.0/core/fmt/struct.Formatter.html\" title=\"struct core::fmt::Formatter\">Formatter</a>&lt;'_&gt;) -&gt; <a class=\"type\" href=\"https://doc.rust-lang.org/1.75.0/core/fmt/type.Result.html\" title=\"type core::fmt::Result\">Result</a></h4></section></summary><div class='docblock'>Formats the value using the given formatter. <a href=\"https://doc.rust-lang.org/1.75.0/core/fmt/trait.Debug.html#tymethod.fmt\">Read more</a></div></details></div></details>","Debug","objc_id::id::ShareId"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-Pointer-for-Id%3CT,+O%3E\" class=\"impl\"><a class=\"src rightside\" href=\"src/objc_id/id.rs.html#127-131\">source</a><a href=\"#impl-Pointer-for-Id%3CT,+O%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;T, O&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.75.0/core/fmt/trait.Pointer.html\" title=\"trait core::fmt::Pointer\">Pointer</a> for <a class=\"struct\" href=\"objc_id/struct.Id.html\" title=\"struct objc_id::Id\">Id</a>&lt;T, O&gt;</h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.fmt\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/objc_id/id.rs.html#128-130\">source</a><a href=\"#method.fmt\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://doc.rust-lang.org/1.75.0/core/fmt/trait.Pointer.html#tymethod.fmt\" class=\"fn\">fmt</a>(&amp;self, f: &amp;mut <a class=\"struct\" href=\"https://doc.rust-lang.org/1.75.0/core/fmt/struct.Formatter.html\" title=\"struct core::fmt::Formatter\">Formatter</a>&lt;'_&gt;) -&gt; <a class=\"type\" href=\"https://doc.rust-lang.org/1.75.0/core/fmt/type.Result.html\" title=\"type core::fmt::Result\">Result</a></h4></section></summary><div class='docblock'>Formats the value using the given formatter.</div></details></div></details>","Pointer","objc_id::id::ShareId"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-Hash-for-Id%3CT,+O%3E\" class=\"impl\"><a class=\"src rightside\" href=\"src/objc_id/id.rs.html#115-119\">source</a><a href=\"#impl-Hash-for-Id%3CT,+O%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;T, O&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.75.0/core/hash/trait.Hash.html\" title=\"trait core::hash::Hash\">Hash</a> for <a class=\"struct\" href=\"objc_id/struct.Id.html\" title=\"struct objc_id::Id\">Id</a>&lt;T, O&gt;<span class=\"where fmt-newline\">where\n    T: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.75.0/core/hash/trait.Hash.html\" title=\"trait core::hash::Hash\">Hash</a>,</span></h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.hash\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/objc_id/id.rs.html#116-118\">source</a><a href=\"#method.hash\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://doc.rust-lang.org/1.75.0/core/hash/trait.Hash.html#tymethod.hash\" class=\"fn\">hash</a>&lt;H&gt;(&amp;self, state: <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.75.0/std/primitive.reference.html\">&amp;mut H</a>)<span class=\"where fmt-newline\">where\n    H: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.75.0/core/hash/trait.Hasher.html\" title=\"trait core::hash::Hasher\">Hasher</a>,</span></h4></section></summary><div class='docblock'>Feeds this value into the given <a href=\"https://doc.rust-lang.org/1.75.0/core/hash/trait.Hasher.html\" title=\"trait core::hash::Hasher\"><code>Hasher</code></a>. <a href=\"https://doc.rust-lang.org/1.75.0/core/hash/trait.Hash.html#tymethod.hash\">Read more</a></div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.hash_slice\" class=\"method trait-impl\"><span class=\"rightside\"><span class=\"since\" title=\"Stable since Rust version 1.3.0\">1.3.0</span> · <a class=\"src\" href=\"https://doc.rust-lang.org/1.75.0/src/core/hash/mod.rs.html#242-244\">source</a></span><a href=\"#method.hash_slice\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://doc.rust-lang.org/1.75.0/core/hash/trait.Hash.html#method.hash_slice\" class=\"fn\">hash_slice</a>&lt;H&gt;(data: &amp;<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.75.0/std/primitive.slice.html\">[Self]</a>, state: <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.75.0/std/primitive.reference.html\">&amp;mut H</a>)<span class=\"where fmt-newline\">where\n    H: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.75.0/core/hash/trait.Hasher.html\" title=\"trait core::hash::Hasher\">Hasher</a>,\n    Self: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.75.0/core/marker/trait.Sized.html\" title=\"trait core::marker::Sized\">Sized</a>,</span></h4></section></summary><div class='docblock'>Feeds a slice of this type into the given <a href=\"https://doc.rust-lang.org/1.75.0/core/hash/trait.Hasher.html\" title=\"trait core::hash::Hasher\"><code>Hasher</code></a>. <a href=\"https://doc.rust-lang.org/1.75.0/core/hash/trait.Hash.html#method.hash_slice\">Read more</a></div></details></div></details>","Hash","objc_id::id::ShareId"],["<section id=\"impl-Sync-for-Id%3CT,+O%3E\" class=\"impl\"><a class=\"src rightside\" href=\"src/objc_id/id.rs.html#83\">source</a><a href=\"#impl-Sync-for-Id%3CT,+O%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;T, O&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.75.0/core/marker/trait.Sync.html\" title=\"trait core::marker::Sync\">Sync</a> for <a class=\"struct\" href=\"objc_id/struct.Id.html\" title=\"struct objc_id::Id\">Id</a>&lt;T, O&gt;<span class=\"where fmt-newline\">where\n    T: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.75.0/core/marker/trait.Sync.html\" title=\"trait core::marker::Sync\">Sync</a>,</span></h3></section>","Sync","objc_id::id::ShareId"],["<section id=\"impl-Send-for-Id%3CT,+Shared%3E\" class=\"impl\"><a class=\"src rightside\" href=\"src/objc_id/id.rs.html#87\">source</a><a href=\"#impl-Send-for-Id%3CT,+Shared%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;T&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.75.0/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a> for <a class=\"struct\" href=\"objc_id/struct.Id.html\" title=\"struct objc_id::Id\">Id</a>&lt;T, <a class=\"enum\" href=\"objc_id/enum.Shared.html\" title=\"enum objc_id::Shared\">Shared</a>&gt;<span class=\"where fmt-newline\">where\n    T: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.75.0/core/marker/trait.Sync.html\" title=\"trait core::marker::Sync\">Sync</a>,</span></h3></section>","Send","objc_id::id::ShareId"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-Clone-for-Id%3CT,+Shared%3E\" class=\"impl\"><a class=\"src rightside\" href=\"src/objc_id/id.rs.html#75-81\">source</a><a href=\"#impl-Clone-for-Id%3CT,+Shared%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;T&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.75.0/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a> for <a class=\"struct\" href=\"objc_id/struct.Id.html\" title=\"struct objc_id::Id\">Id</a>&lt;T, <a class=\"enum\" href=\"objc_id/enum.Shared.html\" title=\"enum objc_id::Shared\">Shared</a>&gt;<span class=\"where fmt-newline\">where\n    T: <a class=\"trait\" href=\"objc/message/trait.Message.html\" title=\"trait objc::message::Message\">Message</a>,</span></h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.clone\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/objc_id/id.rs.html#76-80\">source</a><a href=\"#method.clone\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://doc.rust-lang.org/1.75.0/core/clone/trait.Clone.html#tymethod.clone\" class=\"fn\">clone</a>(&amp;self) -&gt; <a class=\"type\" href=\"objc_id/type.ShareId.html\" title=\"type objc_id::ShareId\">ShareId</a>&lt;T&gt;</h4></section></summary><div class='docblock'>Returns a copy of the value. <a href=\"https://doc.rust-lang.org/1.75.0/core/clone/trait.Clone.html#tymethod.clone\">Read more</a></div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.clone_from\" class=\"method trait-impl\"><span class=\"rightside\"><span class=\"since\" title=\"Stable since Rust version 1.0.0\">1.0.0</span> · <a class=\"src\" href=\"https://doc.rust-lang.org/1.75.0/src/core/clone.rs.html#169\">source</a></span><a href=\"#method.clone_from\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://doc.rust-lang.org/1.75.0/core/clone/trait.Clone.html#method.clone_from\" class=\"fn\">clone_from</a>(&amp;mut self, source: <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.75.0/std/primitive.reference.html\">&amp;Self</a>)</h4></section></summary><div class='docblock'>Performs copy-assignment from <code>source</code>. <a href=\"https://doc.rust-lang.org/1.75.0/core/clone/trait.Clone.html#method.clone_from\">Read more</a></div></details></div></details>","Clone","objc_id::id::ShareId"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-Deref-for-Id%3CT,+O%3E\" class=\"impl\"><a class=\"src rightside\" href=\"src/objc_id/id.rs.html#89-95\">source</a><a href=\"#impl-Deref-for-Id%3CT,+O%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;T, O&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.75.0/core/ops/deref/trait.Deref.html\" title=\"trait core::ops::deref::Deref\">Deref</a> for <a class=\"struct\" href=\"objc_id/struct.Id.html\" title=\"struct objc_id::Id\">Id</a>&lt;T, O&gt;</h3></section></summary><div class=\"impl-items\"><details class=\"toggle\" open><summary><section id=\"associatedtype.Target\" class=\"associatedtype trait-impl\"><a href=\"#associatedtype.Target\" class=\"anchor\">§</a><h4 class=\"code-header\">type <a href=\"https://doc.rust-lang.org/1.75.0/core/ops/deref/trait.Deref.html#associatedtype.Target\" class=\"associatedtype\">Target</a> = T</h4></section></summary><div class='docblock'>The resulting type after dereferencing.</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.deref\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/objc_id/id.rs.html#92-94\">source</a><a href=\"#method.deref\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://doc.rust-lang.org/1.75.0/core/ops/deref/trait.Deref.html#tymethod.deref\" class=\"fn\">deref</a>(&amp;self) -&gt; <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.75.0/std/primitive.reference.html\">&amp;T</a></h4></section></summary><div class='docblock'>Dereferences the value.</div></details></div></details>","Deref","objc_id::id::ShareId"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-PartialEq-for-Id%3CT,+O%3E\" class=\"impl\"><a class=\"src rightside\" href=\"src/objc_id/id.rs.html#103-111\">source</a><a href=\"#impl-PartialEq-for-Id%3CT,+O%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;T, O&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.75.0/core/cmp/trait.PartialEq.html\" title=\"trait core::cmp::PartialEq\">PartialEq</a> for <a class=\"struct\" href=\"objc_id/struct.Id.html\" title=\"struct objc_id::Id\">Id</a>&lt;T, O&gt;<span class=\"where fmt-newline\">where\n    T: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.75.0/core/cmp/trait.PartialEq.html\" title=\"trait core::cmp::PartialEq\">PartialEq</a>,</span></h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.eq\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/objc_id/id.rs.html#104-106\">source</a><a href=\"#method.eq\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://doc.rust-lang.org/1.75.0/core/cmp/trait.PartialEq.html#tymethod.eq\" class=\"fn\">eq</a>(&amp;self, other: &amp;<a class=\"struct\" href=\"objc_id/struct.Id.html\" title=\"struct objc_id::Id\">Id</a>&lt;T, O&gt;) -&gt; <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.75.0/std/primitive.bool.html\">bool</a></h4></section></summary><div class='docblock'>This method tests for <code>self</code> and <code>other</code> values to be equal, and is used\nby <code>==</code>.</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.ne\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/objc_id/id.rs.html#108-110\">source</a><a href=\"#method.ne\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://doc.rust-lang.org/1.75.0/core/cmp/trait.PartialEq.html#method.ne\" class=\"fn\">ne</a>(&amp;self, other: &amp;<a class=\"struct\" href=\"objc_id/struct.Id.html\" title=\"struct objc_id::Id\">Id</a>&lt;T, O&gt;) -&gt; <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.75.0/std/primitive.bool.html\">bool</a></h4></section></summary><div class='docblock'>This method tests for <code>!=</code>. The default implementation is almost always\nsufficient, and should not be overridden without very good reason.</div></details></div></details>","PartialEq","objc_id::id::ShareId"],["<section id=\"impl-Eq-for-Id%3CT,+O%3E\" class=\"impl\"><a class=\"src rightside\" href=\"src/objc_id/id.rs.html#113\">source</a><a href=\"#impl-Eq-for-Id%3CT,+O%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;T, O&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.75.0/core/cmp/trait.Eq.html\" title=\"trait core::cmp::Eq\">Eq</a> for <a class=\"struct\" href=\"objc_id/struct.Id.html\" title=\"struct objc_id::Id\">Id</a>&lt;T, O&gt;<span class=\"where fmt-newline\">where\n    T: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.75.0/core/cmp/trait.Eq.html\" title=\"trait core::cmp::Eq\">Eq</a>,</span></h3></section>","Eq","objc_id::id::ShareId"]]
};if (window.register_type_impls) {window.register_type_impls(type_impls);} else {window.pending_type_impls = type_impls;}})()