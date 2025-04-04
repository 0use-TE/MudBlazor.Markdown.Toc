﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Text.Json.Serialization;
namespace MudBlazor.Markdown.Toc
{
    public class TocNode
    {
		public TocNode() { }
		[JsonConstructor]
		public TocNode(int level, string? id, string? title)
		{
			Level = level;
			Id = id;
			Title = title;
		}
		/// <summary>
		/// h1 h2 h3 h4 h5 h6
		/// </summary>
		[JsonPropertyName("level")]
        public int Level { get; set; }
        /// <summary>
        /// The id of element
        /// </summary>
        [JsonPropertyName("id")]
        public string? Id { get; set; }
        /// <summary>
        ///The contents of an element of type H tag
        /// </summary>
        [JsonPropertyName("title")]
        public string? Title { get; set; }
    }
}
