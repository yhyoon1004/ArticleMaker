package rest.articlemakerrest.mapper;

import org.apache.ibatis.annotations.Mapper;
import rest.articlemakerrest.DTO.Article;

import java.util.List;

@Mapper
public interface ArticleMapper {
    List<Article> getArticleList();

    int insertArticle(Article article);
}
