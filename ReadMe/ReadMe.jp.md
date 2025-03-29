## MudBlazor.Markdown.Toc

### 紹介

こんにちは、Ouseです。これはMudBlazor.Markdownに基づいた拡張ツールで、目次（TOC）を生成するためのものです。以下の機能をサポートしています。

1. 目次のスタイルをカスタマイズ
2. 生成された目次に対応するMudMarkdownコンポーネントを指定
3. 対応する要素への自動スクロール
4. コンテンツが変更されたときに目次を自動追跡

### デモ

![image-20250329193214217](assets/image-20250329193214217.png)

リポジトリをローカルにクローンして、サンプルプロジェクトを起動し、体験してみてください！

### 基本的な使い方

1. MudBlazorとMudBlazor.Markdownの設定を完了します。

2. NuGetパッケージを参照します。パッケージは近日中に追加される予定です（MudBlazorのプレフィックスのため、アップロードに数日かかります）。リリースページからダウンロードしてプロジェクトにインポートするか、プロジェクトをダウンロードして自分でパッケージ化してください。

3. Blazorプロジェクトタイプに応じて、対応するファイルをインポートします。Blazor Web Appの場合はApp.razorに、独立型Blazor Wasmの場合はindex.htmlにインポートします：

   ```html
    <script src=@Assets["_content/MudBlazor.Markdown.Toc/Markdown.Toc.js"] type="module"></script>
   ```

4. 名前空間をインポートします：

   ```csharp
   @using MudBlazor.Markdown.Toc
   ```

5. MudMarkdownTocコンポーネントを使用します。どこにでも配置できますが、ここではMudDrawerの中に配置しました。

   ```html
   <MudMarkdown Value="@value"/>
   <MudDrawer Open Fixed Anchor="Anchor.Right" ClipMode="DrawerClipMode.Always">
   <MudMarkdownToc></MudMarkdownToc>
   </MudDrawer>
   ```

   ### API

   MudMarkdownTocコンポーネントは内部でMudTreeViewコンポーネントを使用しているため、MudTreeViewのほとんどのプロパティを継承しています。以下はMudMarkdownToc特有のプロパティです😋

   - **Id**: TOCが生成されるMudMarkdownコンポーネントを指定します。MudMarkdownコンポーネントにはIdを付けられないため、外側に他のHTMLタグを追加する必要があります。例えば、以下のように、Idが「one」の要素のみがTOCの生成対象となります：

   ```html
   <MudGrid>
       <MudItem xs="6">
           <MudMarkdown Value="@value" />
       </MudItem>
       <MudItem xs="6">
           <div id="one">
               <MudMarkdown Value="@value1" />
           </div>
       </MudItem>
   </MudGrid>
   <MudDrawer Open Fixed Anchor="Anchor.Right" ClipMode="DrawerClipMode.Always">
       <MudMarkdownToc Id="one"></MudMarkdownToc>
   </MudDrawer>
   ```

   - **MonitoredValue**: Valueプロパティの内容が変更される場合、このプロパティを使用して渡された内容を監視し、比較します。パラメータが変更された場合、TOCが再生成されます。このプロパティがないと、コンテンツを切り替えてもTOCは更新されません！

   ```html
   <MudMarkdown Value="@currentValue" />
   <MudDrawer Open Fixed Anchor="Anchor.Right" ClipMode="DrawerClipMode.Always">
       @* 監視する内容を追加 *@
       <MudMarkdownToc MonitoredValue="@currentValue"></MudMarkdownToc>
       <MudButton OnClick="SwitchContent">SwitchContent</MudButton>
   </MudDrawer>
   ```

### 終了

MudBlazorおよびMudBlazor.Markdownの貢献者に心から感謝します。

質問があれば、私に連絡するか、Issueを立ててください！

これが私の初めてのNuGetパッケージです。プロジェクトに役立つことを願っています。気に入ったら、StarやFollowをよろしくお願いします。これからも.NETコミュニティに貢献していきます❤❤❤。