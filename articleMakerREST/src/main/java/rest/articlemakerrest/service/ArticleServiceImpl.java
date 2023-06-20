package rest.articlemakerrest.service;

import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import rest.articlemakerrest.DTO.Article;
import rest.articlemakerrest.mapper.ArticleMapper;

import java.util.List;

@Service
@RequiredArgsConstructor
public class ArticleServiceImpl implements ArticleService{
    private final ArticleMapper articleMapper;
    @Override
    public List<Article> serveGetArticleList() {
        return articleMapper.getArticleList();
    }


    @Override
    public Boolean serveInsertArticle(Article article) {
        return articleMapper.insertArticle(article) > 0;//insert한 컬럼개수가 0보다 클 때
    }

    @Override
    public Boolean serveDeleteArticle(Long id) {
        return articleMapper.deleteArticle(id)>0;
    }
}
