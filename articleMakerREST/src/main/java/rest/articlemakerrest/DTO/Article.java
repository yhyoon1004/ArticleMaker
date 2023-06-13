package rest.articlemakerrest.DTO;

import lombok.Data;

import java.sql.Timestamp;

@Data
public class Article {
    private Long id;
    private Integer status;
    private String writer_id;
    private String title;
    private String content;
    private Timestamp create_time;
    private Timestamp published_time;
    private Long view_count;
}
