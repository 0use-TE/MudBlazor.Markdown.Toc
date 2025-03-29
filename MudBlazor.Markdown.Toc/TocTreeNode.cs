using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace MudBlazor.Markdown.Toc
{
    public class TocTreeNode : TreeItemData<string>
    {
        public string? Id { get; set; }
        public int Level { get; set; }
    }
}
