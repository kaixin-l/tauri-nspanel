(function() {var type_impls = {
"objc_foundation":[["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-INSArray-for-NSArray%3CT,+O%3E\" class=\"impl\"><a class=\"src rightside\" href=\"src/objc_foundation/array.rs.html#173-176\">source</a><a href=\"#impl-INSArray-for-NSArray%3CT,+O%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;T, O&gt; <a class=\"trait\" href=\"objc_foundation/trait.INSArray.html\" title=\"trait objc_foundation::INSArray\">INSArray</a> for <a class=\"struct\" href=\"objc_foundation/struct.NSArray.html\" title=\"struct objc_foundation::NSArray\">NSArray</a>&lt;T, O&gt;<div class=\"where\">where\n    T: <a class=\"trait\" href=\"objc_foundation/trait.INSObject.html\" title=\"trait objc_foundation::INSObject\">INSObject</a>,\n    O: <a class=\"trait\" href=\"objc_id/id/trait.Ownership.html\" title=\"trait objc_id::id::Ownership\">Ownership</a>,</div></h3></section></summary><div class=\"impl-items\"><section id=\"associatedtype.Item\" class=\"associatedtype trait-impl\"><a href=\"#associatedtype.Item\" class=\"anchor\">§</a><h4 class=\"code-header\">type <a href=\"objc_foundation/trait.INSArray.html#associatedtype.Item\" class=\"associatedtype\">Item</a> = T</h4></section><section id=\"associatedtype.Own\" class=\"associatedtype trait-impl\"><a href=\"#associatedtype.Own\" class=\"anchor\">§</a><h4 class=\"code-header\">type <a href=\"objc_foundation/trait.INSArray.html#associatedtype.Own\" class=\"associatedtype\">Own</a> = O</h4></section><section id=\"method.count\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/objc_foundation/array.rs.html#66-70\">source</a><a href=\"#method.count\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"objc_foundation/trait.INSArray.html#method.count\" class=\"fn\">count</a>(&amp;self) -&gt; <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.78.0/std/primitive.usize.html\">usize</a></h4></section><section id=\"method.object_at\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/objc_foundation/array.rs.html#72-77\">source</a><a href=\"#method.object_at\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"objc_foundation/trait.INSArray.html#method.object_at\" class=\"fn\">object_at</a>(&amp;self, index: <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.78.0/std/primitive.usize.html\">usize</a>) -&gt; &amp;Self::<a class=\"associatedtype\" href=\"objc_foundation/trait.INSArray.html#associatedtype.Item\" title=\"type objc_foundation::INSArray::Item\">Item</a></h4></section><section id=\"method.first_object\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/objc_foundation/array.rs.html#79-84\">source</a><a href=\"#method.first_object\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"objc_foundation/trait.INSArray.html#method.first_object\" class=\"fn\">first_object</a>(&amp;self) -&gt; <a class=\"enum\" href=\"https://doc.rust-lang.org/1.78.0/core/option/enum.Option.html\" title=\"enum core::option::Option\">Option</a>&lt;&amp;Self::<a class=\"associatedtype\" href=\"objc_foundation/trait.INSArray.html#associatedtype.Item\" title=\"type objc_foundation::INSArray::Item\">Item</a>&gt;</h4></section><section id=\"method.last_object\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/objc_foundation/array.rs.html#86-91\">source</a><a href=\"#method.last_object\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"objc_foundation/trait.INSArray.html#method.last_object\" class=\"fn\">last_object</a>(&amp;self) -&gt; <a class=\"enum\" href=\"https://doc.rust-lang.org/1.78.0/core/option/enum.Option.html\" title=\"enum core::option::Option\">Option</a>&lt;&amp;Self::<a class=\"associatedtype\" href=\"objc_foundation/trait.INSArray.html#associatedtype.Item\" title=\"type objc_foundation::INSArray::Item\">Item</a>&gt;</h4></section><section id=\"method.object_enumerator\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/objc_foundation/array.rs.html#93-98\">source</a><a href=\"#method.object_enumerator\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"objc_foundation/trait.INSArray.html#method.object_enumerator\" class=\"fn\">object_enumerator</a>(&amp;self) -&gt; <a class=\"struct\" href=\"objc_foundation/struct.NSEnumerator.html\" title=\"struct objc_foundation::NSEnumerator\">NSEnumerator</a>&lt;'_, Self::<a class=\"associatedtype\" href=\"objc_foundation/trait.INSArray.html#associatedtype.Item\" title=\"type objc_foundation::INSArray::Item\">Item</a>&gt; <a href=\"#\" class=\"tooltip\" data-notable-ty=\"NSEnumerator&lt;&#39;_, Self::Item&gt;\">ⓘ</a></h4></section><section id=\"method.from_vec\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/objc_foundation/array.rs.html#100-105\">source</a><a href=\"#method.from_vec\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"objc_foundation/trait.INSArray.html#method.from_vec\" class=\"fn\">from_vec</a>(vec: <a class=\"struct\" href=\"https://doc.rust-lang.org/1.78.0/alloc/vec/struct.Vec.html\" title=\"struct alloc::vec::Vec\">Vec</a>&lt;<a class=\"struct\" href=\"objc_id/id/struct.Id.html\" title=\"struct objc_id::id::Id\">Id</a>&lt;Self::<a class=\"associatedtype\" href=\"objc_foundation/trait.INSArray.html#associatedtype.Item\" title=\"type objc_foundation::INSArray::Item\">Item</a>, Self::<a class=\"associatedtype\" href=\"objc_foundation/trait.INSArray.html#associatedtype.Own\" title=\"type objc_foundation::INSArray::Own\">Own</a>&gt;&gt;) -&gt; <a class=\"struct\" href=\"objc_id/id/struct.Id.html\" title=\"struct objc_id::id::Id\">Id</a>&lt;Self&gt;</h4></section><section id=\"method.objects_in_range\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/objc_foundation/array.rs.html#107-115\">source</a><a href=\"#method.objects_in_range\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"objc_foundation/trait.INSArray.html#method.objects_in_range\" class=\"fn\">objects_in_range</a>(&amp;self, range: <a class=\"struct\" href=\"https://doc.rust-lang.org/1.78.0/core/ops/range/struct.Range.html\" title=\"struct core::ops::range::Range\">Range</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.78.0/std/primitive.usize.html\">usize</a>&gt;) -&gt; <a class=\"struct\" href=\"https://doc.rust-lang.org/1.78.0/alloc/vec/struct.Vec.html\" title=\"struct alloc::vec::Vec\">Vec</a>&lt;&amp;Self::<a class=\"associatedtype\" href=\"objc_foundation/trait.INSArray.html#associatedtype.Item\" title=\"type objc_foundation::INSArray::Item\">Item</a>&gt;</h4></section><section id=\"method.to_vec\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/objc_foundation/array.rs.html#117-119\">source</a><a href=\"#method.to_vec\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"objc_foundation/trait.INSArray.html#method.to_vec\" class=\"fn\">to_vec</a>(&amp;self) -&gt; <a class=\"struct\" href=\"https://doc.rust-lang.org/1.78.0/alloc/vec/struct.Vec.html\" title=\"struct alloc::vec::Vec\">Vec</a>&lt;&amp;Self::<a class=\"associatedtype\" href=\"objc_foundation/trait.INSArray.html#associatedtype.Item\" title=\"type objc_foundation::INSArray::Item\">Item</a>&gt;</h4></section><section id=\"method.into_vec\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/objc_foundation/array.rs.html#121-126\">source</a><a href=\"#method.into_vec\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"objc_foundation/trait.INSArray.html#method.into_vec\" class=\"fn\">into_vec</a>(array: <a class=\"struct\" href=\"objc_id/id/struct.Id.html\" title=\"struct objc_id::id::Id\">Id</a>&lt;Self&gt;) -&gt; <a class=\"struct\" href=\"https://doc.rust-lang.org/1.78.0/alloc/vec/struct.Vec.html\" title=\"struct alloc::vec::Vec\">Vec</a>&lt;<a class=\"struct\" href=\"objc_id/id/struct.Id.html\" title=\"struct objc_id::id::Id\">Id</a>&lt;Self::<a class=\"associatedtype\" href=\"objc_foundation/trait.INSArray.html#associatedtype.Item\" title=\"type objc_foundation::INSArray::Item\">Item</a>, Self::<a class=\"associatedtype\" href=\"objc_foundation/trait.INSArray.html#associatedtype.Own\" title=\"type objc_foundation::INSArray::Own\">Own</a>&gt;&gt;</h4></section></div></details>","INSArray","objc_foundation::array::NSSharedArray"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-INSCopying-for-NSArray%3CT,+Shared%3E\" class=\"impl\"><a class=\"src rightside\" href=\"src/objc_foundation/array.rs.html#178-180\">source</a><a href=\"#impl-INSCopying-for-NSArray%3CT,+Shared%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;T&gt; <a class=\"trait\" href=\"objc_foundation/trait.INSCopying.html\" title=\"trait objc_foundation::INSCopying\">INSCopying</a> for <a class=\"struct\" href=\"objc_foundation/struct.NSArray.html\" title=\"struct objc_foundation::NSArray\">NSArray</a>&lt;T, <a class=\"enum\" href=\"objc_id/id/enum.Shared.html\" title=\"enum objc_id::id::Shared\">Shared</a>&gt;<div class=\"where\">where\n    T: <a class=\"trait\" href=\"objc_foundation/trait.INSObject.html\" title=\"trait objc_foundation::INSObject\">INSObject</a>,</div></h3></section></summary><div class=\"impl-items\"><section id=\"associatedtype.Output\" class=\"associatedtype trait-impl\"><a href=\"#associatedtype.Output\" class=\"anchor\">§</a><h4 class=\"code-header\">type <a href=\"objc_foundation/trait.INSCopying.html#associatedtype.Output\" class=\"associatedtype\">Output</a> = <a class=\"struct\" href=\"objc_foundation/struct.NSArray.html\" title=\"struct objc_foundation::NSArray\">NSArray</a>&lt;T, <a class=\"enum\" href=\"objc_id/id/enum.Shared.html\" title=\"enum objc_id::id::Shared\">Shared</a>&gt;</h4></section><section id=\"method.copy\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/objc_foundation/string.rs.html#12-17\">source</a><a href=\"#method.copy\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"objc_foundation/trait.INSCopying.html#method.copy\" class=\"fn\">copy</a>(&amp;self) -&gt; <a class=\"type\" href=\"objc_id/id/type.ShareId.html\" title=\"type objc_id::id::ShareId\">ShareId</a>&lt;Self::<a class=\"associatedtype\" href=\"objc_foundation/trait.INSCopying.html#associatedtype.Output\" title=\"type objc_foundation::INSCopying::Output\">Output</a>&gt;</h4></section></div></details>","INSCopying","objc_foundation::array::NSSharedArray"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-INSFastEnumeration-for-NSArray%3CT,+O%3E\" class=\"impl\"><a class=\"src rightside\" href=\"src/objc_foundation/array.rs.html#186-189\">source</a><a href=\"#impl-INSFastEnumeration-for-NSArray%3CT,+O%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;T, O&gt; <a class=\"trait\" href=\"objc_foundation/trait.INSFastEnumeration.html\" title=\"trait objc_foundation::INSFastEnumeration\">INSFastEnumeration</a> for <a class=\"struct\" href=\"objc_foundation/struct.NSArray.html\" title=\"struct objc_foundation::NSArray\">NSArray</a>&lt;T, O&gt;<div class=\"where\">where\n    T: <a class=\"trait\" href=\"objc_foundation/trait.INSObject.html\" title=\"trait objc_foundation::INSObject\">INSObject</a>,\n    O: <a class=\"trait\" href=\"objc_id/id/trait.Ownership.html\" title=\"trait objc_id::id::Ownership\">Ownership</a>,</div></h3></section></summary><div class=\"impl-items\"><section id=\"associatedtype.Item\" class=\"associatedtype trait-impl\"><a href=\"#associatedtype.Item\" class=\"anchor\">§</a><h4 class=\"code-header\">type <a href=\"objc_foundation/trait.INSFastEnumeration.html#associatedtype.Item\" class=\"associatedtype\">Item</a> = T</h4></section><section id=\"method.enumerator\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/objc_foundation/enumerator.rs.html#37-39\">source</a><a href=\"#method.enumerator\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"objc_foundation/trait.INSFastEnumeration.html#method.enumerator\" class=\"fn\">enumerator</a>(&amp;self) -&gt; <a class=\"struct\" href=\"objc_foundation/struct.NSFastEnumerator.html\" title=\"struct objc_foundation::NSFastEnumerator\">NSFastEnumerator</a>&lt;'_, Self&gt; <a href=\"#\" class=\"tooltip\" data-notable-ty=\"NSFastEnumerator&lt;&#39;_, Self&gt;\">ⓘ</a></h4></section></div></details>","INSFastEnumeration","objc_foundation::array::NSSharedArray"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-INSMutableCopying-for-NSArray%3CT,+Shared%3E\" class=\"impl\"><a class=\"src rightside\" href=\"src/objc_foundation/array.rs.html#182-184\">source</a><a href=\"#impl-INSMutableCopying-for-NSArray%3CT,+Shared%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;T&gt; <a class=\"trait\" href=\"objc_foundation/trait.INSMutableCopying.html\" title=\"trait objc_foundation::INSMutableCopying\">INSMutableCopying</a> for <a class=\"struct\" href=\"objc_foundation/struct.NSArray.html\" title=\"struct objc_foundation::NSArray\">NSArray</a>&lt;T, <a class=\"enum\" href=\"objc_id/id/enum.Shared.html\" title=\"enum objc_id::id::Shared\">Shared</a>&gt;<div class=\"where\">where\n    T: <a class=\"trait\" href=\"objc_foundation/trait.INSObject.html\" title=\"trait objc_foundation::INSObject\">INSObject</a>,</div></h3></section></summary><div class=\"impl-items\"><section id=\"associatedtype.Output\" class=\"associatedtype trait-impl\"><a href=\"#associatedtype.Output\" class=\"anchor\">§</a><h4 class=\"code-header\">type <a href=\"objc_foundation/trait.INSMutableCopying.html#associatedtype.Output\" class=\"associatedtype\">Output</a> = <a class=\"struct\" href=\"objc_foundation/struct.NSMutableArray.html\" title=\"struct objc_foundation::NSMutableArray\">NSMutableArray</a>&lt;T, <a class=\"enum\" href=\"objc_id/id/enum.Shared.html\" title=\"enum objc_id::id::Shared\">Shared</a>&gt;</h4></section><section id=\"method.mutable_copy\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/objc_foundation/string.rs.html#23-28\">source</a><a href=\"#method.mutable_copy\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"objc_foundation/trait.INSMutableCopying.html#method.mutable_copy\" class=\"fn\">mutable_copy</a>(&amp;self) -&gt; <a class=\"struct\" href=\"objc_id/id/struct.Id.html\" title=\"struct objc_id::id::Id\">Id</a>&lt;Self::<a class=\"associatedtype\" href=\"objc_foundation/trait.INSMutableCopying.html#associatedtype.Output\" title=\"type objc_foundation::INSMutableCopying::Output\">Output</a>&gt;</h4></section></div></details>","INSMutableCopying","objc_foundation::array::NSSharedArray"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-INSObject-for-NSArray%3CT,+O%3E\" class=\"impl\"><a class=\"src rightside\" href=\"src/objc_foundation/array.rs.html#167-171\">source</a><a href=\"#impl-INSObject-for-NSArray%3CT,+O%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;T, O&gt; <a class=\"trait\" href=\"objc_foundation/trait.INSObject.html\" title=\"trait objc_foundation::INSObject\">INSObject</a> for <a class=\"struct\" href=\"objc_foundation/struct.NSArray.html\" title=\"struct objc_foundation::NSArray\">NSArray</a>&lt;T, O&gt;<div class=\"where\">where\n    T: <a class=\"trait\" href=\"objc_foundation/trait.INSObject.html\" title=\"trait objc_foundation::INSObject\">INSObject</a>,\n    O: <a class=\"trait\" href=\"objc_id/id/trait.Ownership.html\" title=\"trait objc_id::id::Ownership\">Ownership</a>,</div></h3></section></summary><div class=\"impl-items\"><section id=\"method.class\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/objc_foundation/array.rs.html#168-170\">source</a><a href=\"#method.class\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"objc_foundation/trait.INSObject.html#tymethod.class\" class=\"fn\">class</a>() -&gt; &amp;'static <a class=\"struct\" href=\"objc/runtime/struct.Class.html\" title=\"struct objc::runtime::Class\">Class</a></h4></section><section id=\"method.hash_code\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/objc_foundation/object.rs.html#18-22\">source</a><a href=\"#method.hash_code\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"objc_foundation/trait.INSObject.html#method.hash_code\" class=\"fn\">hash_code</a>(&amp;self) -&gt; <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.78.0/std/primitive.usize.html\">usize</a></h4></section><section id=\"method.is_equal\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/objc_foundation/object.rs.html#24-29\">source</a><a href=\"#method.is_equal\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"objc_foundation/trait.INSObject.html#method.is_equal\" class=\"fn\">is_equal</a>&lt;T&gt;(&amp;self, other: <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.78.0/std/primitive.reference.html\">&amp;T</a>) -&gt; <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.78.0/std/primitive.bool.html\">bool</a><div class=\"where\">where\n    T: <a class=\"trait\" href=\"objc_foundation/trait.INSObject.html\" title=\"trait objc_foundation::INSObject\">INSObject</a>,</div></h4></section><section id=\"method.description\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/objc_foundation/object.rs.html#31-36\">source</a><a href=\"#method.description\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"objc_foundation/trait.INSObject.html#method.description\" class=\"fn\">description</a>(&amp;self) -&gt; <a class=\"type\" href=\"objc_id/id/type.ShareId.html\" title=\"type objc_id::id::ShareId\">ShareId</a>&lt;<a class=\"struct\" href=\"objc_foundation/struct.NSString.html\" title=\"struct objc_foundation::NSString\">NSString</a>&gt;</h4></section><section id=\"method.is_kind_of\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/objc_foundation/object.rs.html#38-43\">source</a><a href=\"#method.is_kind_of\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"objc_foundation/trait.INSObject.html#method.is_kind_of\" class=\"fn\">is_kind_of</a>(&amp;self, cls: &amp;<a class=\"struct\" href=\"objc/runtime/struct.Class.html\" title=\"struct objc::runtime::Class\">Class</a>) -&gt; <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.78.0/std/primitive.bool.html\">bool</a></h4></section><section id=\"method.new\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/objc_foundation/object.rs.html#45-52\">source</a><a href=\"#method.new\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"objc_foundation/trait.INSObject.html#method.new\" class=\"fn\">new</a>() -&gt; <a class=\"struct\" href=\"objc_id/id/struct.Id.html\" title=\"struct objc_id::id::Id\">Id</a>&lt;Self&gt;</h4></section></div></details>","INSObject","objc_foundation::array::NSSharedArray"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-Index%3Cusize%3E-for-NSArray%3CT,+O%3E\" class=\"impl\"><a class=\"src rightside\" href=\"src/objc_foundation/array.rs.html#191-197\">source</a><a href=\"#impl-Index%3Cusize%3E-for-NSArray%3CT,+O%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;T, O&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.78.0/core/ops/index/trait.Index.html\" title=\"trait core::ops::index::Index\">Index</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.78.0/std/primitive.usize.html\">usize</a>&gt; for <a class=\"struct\" href=\"objc_foundation/struct.NSArray.html\" title=\"struct objc_foundation::NSArray\">NSArray</a>&lt;T, O&gt;<div class=\"where\">where\n    T: <a class=\"trait\" href=\"objc_foundation/trait.INSObject.html\" title=\"trait objc_foundation::INSObject\">INSObject</a>,\n    O: <a class=\"trait\" href=\"objc_id/id/trait.Ownership.html\" title=\"trait objc_id::id::Ownership\">Ownership</a>,</div></h3></section></summary><div class=\"impl-items\"><details class=\"toggle\" open><summary><section id=\"associatedtype.Output\" class=\"associatedtype trait-impl\"><a href=\"#associatedtype.Output\" class=\"anchor\">§</a><h4 class=\"code-header\">type <a href=\"https://doc.rust-lang.org/1.78.0/core/ops/index/trait.Index.html#associatedtype.Output\" class=\"associatedtype\">Output</a> = T</h4></section></summary><div class='docblock'>The returned type after indexing.</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.index\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/objc_foundation/array.rs.html#194-196\">source</a><a href=\"#method.index\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://doc.rust-lang.org/1.78.0/core/ops/index/trait.Index.html#tymethod.index\" class=\"fn\">index</a>(&amp;self, index: <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.78.0/std/primitive.usize.html\">usize</a>) -&gt; <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.78.0/std/primitive.reference.html\">&amp;T</a></h4></section></summary><div class='docblock'>Performs the indexing (<code>container[index]</code>) operation. <a href=\"https://doc.rust-lang.org/1.78.0/core/ops/index/trait.Index.html#tymethod.index\">Read more</a></div></details></div></details>","Index<usize>","objc_foundation::array::NSSharedArray"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-Message-for-NSArray%3CT,+O%3E\" class=\"impl\"><a class=\"src rightside\" href=\"src/objc_foundation/array.rs.html#165\">source</a><a href=\"#impl-Message-for-NSArray%3CT,+O%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;T, O&gt; <a class=\"trait\" href=\"objc/message/trait.Message.html\" title=\"trait objc::message::Message\">Message</a> for <a class=\"struct\" href=\"objc_foundation/struct.NSArray.html\" title=\"struct objc_foundation::NSArray\">NSArray</a>&lt;T, O&gt;</h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.send_message\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/objc/message/mod.rs.html#62-64\">source</a><a href=\"#method.send_message\" class=\"anchor\">§</a><h4 class=\"code-header\">unsafe fn <a href=\"objc/message/trait.Message.html#method.send_message\" class=\"fn\">send_message</a>&lt;A, R&gt;(\n    &amp;self,\n    sel: <a class=\"struct\" href=\"objc/runtime/struct.Sel.html\" title=\"struct objc::runtime::Sel\">Sel</a>,\n    args: A\n) -&gt; <a class=\"enum\" href=\"https://doc.rust-lang.org/1.78.0/core/result/enum.Result.html\" title=\"enum core::result::Result\">Result</a>&lt;R, <a class=\"struct\" href=\"objc/message/struct.MessageError.html\" title=\"struct objc::message::MessageError\">MessageError</a>&gt;<div class=\"where\">where\n    Self: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.78.0/core/marker/trait.Sized.html\" title=\"trait core::marker::Sized\">Sized</a>,\n    A: <a class=\"trait\" href=\"objc/message/trait.MessageArguments.html\" title=\"trait objc::message::MessageArguments\">MessageArguments</a>,\n    R: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.78.0/core/any/trait.Any.html\" title=\"trait core::any::Any\">Any</a>,</div></h4></section></summary><div class='docblock'>Sends a message to self with the given selector and arguments. <a href=\"objc/message/trait.Message.html#method.send_message\">Read more</a></div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.verify_message\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/objc/message/mod.rs.html#99-100\">source</a><a href=\"#method.verify_message\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"objc/message/trait.Message.html#method.verify_message\" class=\"fn\">verify_message</a>&lt;A, R&gt;(&amp;self, sel: <a class=\"struct\" href=\"objc/runtime/struct.Sel.html\" title=\"struct objc::runtime::Sel\">Sel</a>) -&gt; <a class=\"enum\" href=\"https://doc.rust-lang.org/1.78.0/core/result/enum.Result.html\" title=\"enum core::result::Result\">Result</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.78.0/std/primitive.unit.html\">()</a>, <a class=\"struct\" href=\"objc/message/struct.MessageError.html\" title=\"struct objc::message::MessageError\">MessageError</a>&gt;<div class=\"where\">where\n    Self: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.78.0/core/marker/trait.Sized.html\" title=\"trait core::marker::Sized\">Sized</a>,\n    A: <a class=\"trait\" href=\"objc/encode/trait.EncodeArguments.html\" title=\"trait objc::encode::EncodeArguments\">EncodeArguments</a>,\n    R: <a class=\"trait\" href=\"objc/encode/trait.Encode.html\" title=\"trait objc::encode::Encode\">Encode</a>,</div></h4></section></summary><div class='docblock'>Verifies that the argument and return types match the encoding of the\nmethod for the given selector. <a href=\"objc/message/trait.Message.html#method.verify_message\">Read more</a></div></details></div></details>","Message","objc_foundation::array::NSSharedArray"]]
};if (window.register_type_impls) {window.register_type_impls(type_impls);} else {window.pending_type_impls = type_impls;}})()