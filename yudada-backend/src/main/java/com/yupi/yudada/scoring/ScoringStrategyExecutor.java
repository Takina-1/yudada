package com.yupi.yudada.scoring;

import com.yupi.yudada.common.ErrorCode;
import com.yupi.yudada.exception.BusinessException;
import com.yupi.yudada.model.entity.App;
import com.yupi.yudada.model.entity.UserAnswer;
import org.springframework.stereotype.Service;

import javax.annotation.Resource;
import java.util.List;

/**
 * 评分策略执行器，通过注解获取策略,当需要调用策略时，调用该方法，选择不同的doScore方法
 */
@Service
public class ScoringStrategyExecutor {

    // 策略列表
    @Resource
    private List<ScoringStrategy> scoringStrategyList;


    /**
     * 评分
     *
     * @param choiceList
     * @param app
     * @return
     * @throws Exception
     */

    public UserAnswer doScore(List<String> choiceList, App app) throws Exception {
//        * 应用类型（0-得分类，1-测评类）
        Integer appType = app.getAppType();
//        * 评分策略（0-自定义，1-AI）
        Integer appScoringStrategy = app.getScoringStrategy();
//        题目的类型已经由上面两行代码确定
        if (appType == null || appScoringStrategy == null) {
            throw new BusinessException(ErrorCode.SYSTEM_ERROR, "应用配置有误，未找到匹配的策略");
        }
        // 根据注解获取策略
        for (ScoringStrategy strategy : scoringStrategyList) {
//            判断是否属于自定义注解策略中的某一个
            if (strategy.getClass().isAnnotationPresent(ScoringStrategyConfig.class)) {
//定义一个策略注解配置类，赋值为遍历得到的注解信息
                ScoringStrategyConfig scoringStrategyConfig = strategy.getClass().getAnnotation(ScoringStrategyConfig.class);
                if (scoringStrategyConfig.appType() == appType && scoringStrategyConfig.scoringStrategy() == appScoringStrategy) {
                    return strategy.doScore(choiceList, app);
                }
            }
        }
        throw new BusinessException(ErrorCode.SYSTEM_ERROR, "应用配置有误，未找到匹配的策略");
    }
}
