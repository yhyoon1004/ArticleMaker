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
    public List<Article> serveArticleList() {
        return articleMapper.getArticleList();
    }
}
