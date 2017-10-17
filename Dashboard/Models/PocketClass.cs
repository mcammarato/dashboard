﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Net;
using System.Web.Script.Serialization;

namespace ExtensionMethods
{
    public static class JSONHelper
    {
        public static string ToJSON(this object obj)
        {
            JavaScriptSerializer serializer = new JavaScriptSerializer();
            return serializer.Serialize(obj);
        }

        public static string ToJSON(this object obj, int recursionDepth)
        {
            JavaScriptSerializer serializer = new JavaScriptSerializer();
            serializer.RecursionLimit = recursionDepth;
            return serializer.Serialize(obj);
        }
    }
}


namespace Dashboard.Models
{

    public class BaseObject
    {
        public int status { get; set; }
        public int complete { get; set; }
        public Dictionary<string, List> list { get; set; }
        public object error { get; set; }
        public Search_Meta search_meta { get; set; }
        public int since { get; set; }
    }


public class Search_Meta
    {
        public string search_type { get; set; }
    }


    public class List
    {
        public string item_id { get; set; }
        public string resolved_id { get; set; }
        public string given_url { get; set; }
        public string given_title { get; set; }
        public string favorite { get; set; }
        public string status { get; set; }
        public string time_added { get; set; }
        public string time_updated { get; set; }
        public string time_read { get; set; }
        public string time_favorited { get; set; }
        public int sort_id { get; set; }
        public string resolved_title { get; set; }
        public string resolved_url { get; set; }
        public string excerpt { get; set; }
        public string is_article { get; set; }
        public string is_index { get; set; }
        public string has_video { get; set; }
        public string has_image { get; set; }
        public string word_count { get; set; }
    }
}
